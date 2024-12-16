import React from "react";
import { BsArrowRight } from "react-icons/bs";

import './TrendingHang.scss'

function TrendingHang () {
  return (
    <>
      <div className = "SLNguoiDung"> 
        <div className="thanhPhanSLND">
          <h1>14K</h1>
          <span>so ve duoc ban trong một tháng</span>
        </div>
            
        <div className="trend_info">
          <h4>Hang may bay 2</h4>
          <span>so ve duoc ban 2</span>
        </div>
        
        <div className="trend_info">
          <h4>Hang may bay 3</h4>
          <span>so ve duoc ban 3</span>
        </div>
      </div>
    </>
  )
}

export default TrendingHang;