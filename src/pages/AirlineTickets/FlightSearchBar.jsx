/**
 * @author Tan Dat
 */
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';

import "react-datepicker/dist/react-datepicker.css";
//icon
import { FaPlaneDeparture, FaPlaneArrival, FaSearch } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdFlightClass } from "react-icons/md";
//scss
import "./FlightSearchBar.scss"


const FlightSearchBar = ({ listTickets, setList }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [selectedOption, setSelectedOption] = useState([]);
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [planeClass, setPlaneClass] = useState('');

  //Chuyển kiểu Date sang "year-month-day" để so sánh với NgayCatCanh
  const formatStartDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to getMonth() because months are zero-based
    const day = String(date.getDate()).padStart(2, '0'); // Pad the day with 0 if needed
  
    return `${year}-${month}-${day}`;
  };
  

  //Lấy danh sách địa điểm đến và đi unique
  const listDeparture = listTickets
    .map((place) => place.tenddxp)
    .filter((departure, index, self) => self.indexOf(departure) === index);

  const listArrival = listTickets
    .map((place) => place.tenddden)
    .filter((arrival, index, self) => self.indexOf(arrival) === index);

  //Hàm tìm thứ
  const getDayOfWeek = (date) => {
    return date.toLocaleDateString("vi-VN", { weekday: "long" });
  };

  //Hàm thực hiện chức năng search
  const handleTimVe = () => {
    const tempStartDate = formatStartDate(startDate);
    console.log(tempStartDate);
    const filterVe = listTickets.filter((ticket_item) =>
      (!departurePlace || ticket_item.tenddxp === departurePlace) &&
      (!arrivalPlace || ticket_item.tenddden === arrivalPlace) && 
      (!planeClass || ticket_item.TenLoaiGhe === planeClass) &&
      (!tempStartDate || ticket_item.NgayCatCanh === tempStartDate)
    );
    setList(filterVe);
  }

  return (
    <div className="flight-search-bar-container">
      <div className="search-container">
        <Container fluid>
          <Row className="search-row1">
            <Col xs={12} md={8} className="flight-location-container">
              <FaPlaneDeparture size={30} />
              <div className="from-to-box">
                <div className="from-to-txt">Từ</div>
                <div>
                  <Form.Select
                    onChange={(e) => setDeparturePlace(e.target.value)}
                    aria-label="Default select example"
                    size="sm"
                  >
                    <option value="">Chọn nơi xuất phát</option>
                    {listDeparture.map((item, index) =>
                      <option key={index} value={item}>{item}</option>
                    )}
                  </Form.Select>

                </div>
              </div>
              <div className="v-line"></div>
              <FaPlaneArrival size={30} />
              <div className="from-to-box">
                <div className="from-to-txt">Đến</div>
                <div>
                  <Form.Select
                    onChange={(e) => setArrivalPlace(e.target.value)}
                    aria-label="Default select example"
                    size="sm"
                  >
                    <option value="">Chọn nơi đến</option>
                    {listArrival.map((item, index) =>
                      <option key={index} value={item}>{item}</option>
                    )}
                  </Form.Select>
                </div>
              </div>
            </Col>
            <Col className="quantity-container">
              <MdFlightClass size={30} />
              <div className="from-to-box">
                <div className="from-to-txt">Hạng</div>
                <div>
                  <Form.Select
                    onChange={(e) => setPlaneClass(e.target.value)}
                    aria-label="Default select example"
                    size="sm"
                  >
                    <option value="">Bất kỳ</option>
                    <option value="Thương gia">Thương gia</option>
                    <option value="Phổ thông">Phổ thông</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="search-row2">
            <Col xs={12} md={8} className="flight-time-container">
              <FaRegCalendarDays size={30} />
              <div className="from-to-box">
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="custom-date-picker"
                  />
                </div>
                <div className="from-to-txt">{getDayOfWeek(startDate)}</div>
              </div>
              <div className="v-line"></div>
              <FaRegCalendarDays size={30} />
              <div className="from-to-box">
                <div>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="custom-date-picker"
                  />
                </div>
                <div className="from-to-txt">{getDayOfWeek(endDate)}</div>
              </div>
            </Col>
            <Col className="seacrh-btn-container">
              <Button
                variant="primary"
                size="lg"
                className="find-flight-btn"
                onClick={handleTimVe}
              >
                <FaSearch size={30} />
                Tìm vé bay
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
export default FlightSearchBar;