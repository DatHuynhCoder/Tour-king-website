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


function getLabelText(ratingValue) {
  return `${ratingValue} Star${ratingValue !== 1 ? 's' : ''}, ${labels[ratingValue]}`;
}

const Ticket = ({ticket_item}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setValue] = React.useState(0);
  const [ratingHover, setHover] = React.useState(-1);

  const handleDetailClick = () => setIsOpen(!isOpen);

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
              <div className="departure-time">{ticket_item.giodi}</div>
              <div className="departure-place">{ticket_item.noidi}</div>
            </div>
            <div className="journey-box">
              <div className="journey-time">{ticket_item.thoigianbay}</div>
              <div class="journey-line-container">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <div className="extra-word">Bay thẳng</div>
            </div>
            <div className="arrival-box">
              <div className="arrival-time">{ticket_item.gioden}</div>
              <div className="arrival-place">{ticket_item.noiden}</div>
            </div>
          </div>

          <div className="toggle-details" onClick={handleDetailClick}>
            {isOpen ? "Ẩn chi tiết chuyến bay" : "Chi tiết chuyến bay"}
          </div>
        </div>
        <div className="v-line-box">
          <div className="v-line"></div>
        </div>
        <div className="price-box">
          <div className="price"><span style={{ color: 'green', fontWeight: 'bold' }}>1.500.000 VNĐ</span> / Khách</div>
          <Button variant="primary" style={{ fontWeight: 'bold' }}>Đặt vé</Button>
        </div>
      </div>
      <div className={`sub-container ${isOpen ? "open" : ""}`}>
        <div className="flight-id">Chuyến bay: {ticket_item.tenchuyenbay}</div>
        <div className="subbox">
          <div className="time-subbox">
            <div className="departure-time">{ticket_item.giodi}</div>
            <div className="arrival-time">{ticket_item.gioden}</div>
          </div>
          <div className="vertical-line-container">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>
          <div className="subbox-place-info">
            <div>
              <div>{ticket_item.noidi}</div>
              <div>{ticket_item.sanbaydi}</div>
            </div>
            <div>
              <PiAirplaneTiltFill size={30}/>
            </div>
            <div>
              <div>{ticket_item.noiden}</div>
              <div>{ticket_item.sanbayden}</div>
            </div>
          </div>

          <div className="subbox-plane-info">
            <div className="plane-name"><FcInfo size={30}/> {ticket_item.tenmaybay}</div>
            <div className="hand-luggage"><FaPersonWalkingLuggage size={30}/> Hành lý xách tay: {ticket_item.hlxt} kg</div>
            <div className="checked-luggage"><FaLuggageCart size={30}/>  Hành lý ký gửi: {ticket_item.hlkg} kg</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket;