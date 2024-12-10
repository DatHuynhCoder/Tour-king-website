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
  5: 'Xuất sắc+',
};

function getLabelText(ratingValue) {
  return `${ratingValue} Star${ratingValue !== 1 ? 's' : ''}, ${labels[ratingValue]}`;
}

const Ticket = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [ratingValue, setValue] = React.useState(2);
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
              <div className="departure-time">7:00</div>
              <div className="departure-place">TP.HCM</div>
            </div>
            <div className="journey-box">
              <div className="journey-time">3:00</div>
              <div class="journey-line-container">
                <div class="circle"></div>
                <div class="line"></div>
                <div class="circle"></div>
              </div>
              <div className="extra-word">Bay thẳng</div>
            </div>
            <div className="arrival-box">
              <div className="arrival-time">10:00</div>
              <div className="arrival-place">Hà Nội</div>
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
          <div className="price"><span style={{color: 'green', fontWeight: 'bold'}}>1.500.000 VNĐ</span> / Khách</div>
          <Button variant="primary" style={{fontWeight: 'bold'}}>Đặt vé</Button>
        </div>
      </div>
      <div className={`sub-container ${isOpen ? "open" : ""}`}>
        Subcontent here
      </div>
    </div>
  )
}

export default Ticket;