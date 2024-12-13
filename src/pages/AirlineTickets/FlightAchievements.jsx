/**
 * @author Tan Dat
 */

import React from 'react'
import { Image } from 'react-bootstrap';
// Img
import Flight1 from "../../assets/FlightAchievement1.png"
import Flight2 from "../../assets/FlightAchievement2.png"
import Flight3 from "../../assets/FlightAchievement3.png"
//scss
import './FlightAchievements.scss'

const FlightAchievements = () => {
  return (
    <>
      <div className="achievement-container">
        <div className="achieve-box">
          <Image
            src={Flight1}
            width={150}
            height={150}
          />
          <div className="achieve-txt">Hơn 1 triệu vé bán ra</div>
        </div>
        <div className="achieve-box">
          <Image
            src={Flight2}
            width={150}
            height={150}
          />
          <div className="achieve-txt">99% khách hàng hài lòng</div>
        </div>
        <div className="achieve-box">
          <Image
            src={Flight3}
            width={150}
            height={150}
          />
          <div className="achieve-txt">Hỗ trợ nhanh chóng, chính xác</div>
        </div>
      </div>

      <div className='hline' />
    </>
  )
}

export default FlightAchievements;