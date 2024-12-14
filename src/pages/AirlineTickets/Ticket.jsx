/**
 * @author Tan Dat
 * include ticket and it container, i dont have a mood to make a ticket component
 */

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
//logo
import VNAirlines from "../../assets/VNairlines.png"
//icon
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FcInfo } from "react-icons/fc";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaLuggageCart } from "react-icons/fa";
//scss
import './Ticket.scss'

const labels = {
  0.5: 'Quá tệ',
  1: 'Quá tệ+',
  1.5: 'Tệ',
  2: 'Tệ+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Tốt',
  4: 'Tốt+',
  4.5: 'Xuất sắc',
  5: 'Hoàn hảo',
};

//Xử lý tính giờ
const calculateDuration = (startTime, endTime) => {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes; // Chuyển đổi sang phút
  };

  const minutesToTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} giờ ${minutes} phút`;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  const diffMinutes = endMinutes - startMinutes;

  if (diffMinutes < 0) return "Thời gian không hợp lệ"; // Kiểm tra thời gian hợp lệ

  return minutesToTime(diffMinutes);
};


function getLabelText(ratingValue) {
  return `${ratingValue} Star${ratingValue !== 1 ? 's' : ''}, ${labels[ratingValue]}`;
}

const Ticket = ({ ticket_item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setValue] = React.useState(0);
  const [ratingHover, setHover] = React.useState(-1);

  const handleDetailClick = () => setIsOpen(!isOpen);

  const duration = calculateDuration(ticket_item.GioCatCanh, ticket_item.GioDen);

  return (
    <div className="ticket-container">
      <div className="main-container">
        <div className="info-box">
          <div className="banner-box">
            <img src={VNAirlines} alt="hangmaybay" style={{ maxHeight: '40px', marginRight: '10px' }} />
            <Rating
              name="ratingHover-feedback"
              value={ratingValue}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {ratingValue !== null && (
              <Box sx={{ ml: 2 }}>{labels[ratingHover !== -1 ? ratingHover : ratingValue]}</Box>
            )}
          </div>
          <div className="time-box">
            <div className="departure-box">
              <div className="departure-time">{ticket_item.GioCatCanh}</div>
              <div className="departure-place">{ticket_item.tenddxp}</div>
            </div>
            <div className="journey-box">
              <div className="journey-time">{duration}</div>
              <div class="journey-line-container">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <div className="extra-word">Bay thẳng</div>
            </div>
            <div className="arrival-box">
              <div className="arrival-time">{ticket_item.GioDen}</div>
              <div className="arrival-place">{ticket_item.tenddden}</div>
            </div>
          </div>

          <div className="toggle-details" onClick={handleDetailClick}>
            {isOpen ? "Ẩn chi tiết vé bay" : "Chi tiết vé bay"}
          </div>
        </div>
        <div className="v-line-box">
          <div className="v-line"></div>
        </div>
        <div className="price-box">
          <div className="sub-price-box">
            <div className="price-box-chair-id">Mã ghế: <span style={{ fontWeight: 'bold', fontSize: '20px' }}>{ticket_item.MaGhe}</span></div>
            <div className={`${ticket_item.TenLoaiGhe === "Thương gia" ? "thuonggia" : "phothong"}`}>{ticket_item.TenLoaiGhe}</div>
          </div>
          <div className="price"><span style={{ color: 'green', fontWeight: 'bold' }}>{ticket_item.Gia}</span> / Khách</div>
          <Button variant="primary" style={{ fontWeight: 'bold' }}>Đặt vé</Button>
        </div>
      </div>
      <div className={`sub-container ${isOpen ? "open" : ""}`}>
        <div className="flight-id">Chuyến bay: {ticket_item.MaChuyenBay}</div>
        <div className="subbox">
          <div className="time-subbox">
            <div className="departure-time">{ticket_item.GioCatCanh}</div>
            <div className="arrival-time">{ticket_item.GioDen}</div>
          </div>
          <div className="vertical-line-container">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="subbox-place-info">
            <div>
              <div>{ticket_item.tenddxp}</div>
              <div>{ticket_item.tensbxp}</div>
            </div>
            <div>
              <PiAirplaneTiltFill size={30} />
            </div>
            <div>
              <div>{ticket_item.tenddden}</div>
              <div>{ticket_item.tensbden}</div>
            </div>
          </div>

          <div className="subbox-plane-info">
            <div>
              {ticket_item.GiaiTri ? <span className="dich-vu-ve" style={{backgroundColor: 'blueviolet'}}>🎭 Giải trí</span> : <span></span>}
              {ticket_item.Sac ? <span className="dich-vu-ve" style={{backgroundColor: '#219C90'}}>⚡ Sạc</span> : <span></span>}
              {ticket_item.DoAn ? <span className="dich-vu-ve" style={{backgroundColor: '#FFC700'}}>🍔 Đồ ăn</span> : <span></span>}
            </div>
            <div className="plane-name"><FcInfo size={30} /> {ticket_item.TenLoaiMayBay} {ticket_item.SoHieuMayBay}</div>
            <div className="hand-luggage"><FaPersonWalkingLuggage size={30} /> Hành lý xách tay: {ticket_item.SoKgHLxachtay} kg</div>
            <div className="checked-luggage"><FaLuggageCart size={30} />  Hành lý ký gửi: {ticket_item.SoKgHLkygui} kg</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket;