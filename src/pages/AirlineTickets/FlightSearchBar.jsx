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
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";
//icon
import { FaPlaneDeparture, FaPlaneArrival, FaSearch } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
//scss
import "./FlightSearchBar.scss"

const quantityOptions = [
  {
    label: "Người lớn", // Nhãn của nhóm
    options: Array.from({ length: 5 }, (_, i) => ({
      value: `adult-${i + 1}`, // Giá trị của mỗi lựa chọn
      label: `${i + 1} Người lớn`, // Hiển thị trên select
    })),
  },
  {
    label: "Trẻ em", // Nhãn của nhóm
    options: Array.from({ length: 5 }, (_, i) => ({
      value: `child-${i + 1}`, // Giá trị của mỗi lựa chọn
      label: `${i + 1} Trẻ em`, // Hiển thị trên select
    })),
  },
];


const FlightSearchBar = ({ listTickets, setList }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState([]);
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');

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
    const filterVe = listTickets.filter((ticket_item) =>
      (!departurePlace || ticket_item.tenddxp === departurePlace) &&
      (!arrivalPlace || ticket_item.tenddden === arrivalPlace)
    );
    console.log(startDate);
    console.log(endDate);
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
              <GoPeople size={30} />
              <div className="from-to-box">
                <div className="from-to-txt">Số lượng khách</div>
                <div>
                  <Select
                    isMulti
                    isSearchable={false}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={quantityOptions}
                  />
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