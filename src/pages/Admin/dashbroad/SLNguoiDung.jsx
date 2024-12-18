import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import './TrendingHang.scss'

function TrendingHang () {
  const [listAirline, setListAirline] = useState([])
  useEffect(() => {
    const date = new Date();
    const curr_month = date.getMonth() + 1;
    axios.get(`http://localhost:8800/get-number-ticket-in-month-by-airline?Month=${curr_month}`).then(res => {
      console.log(res.data);
      setListAirline(res.data)
    })
  }, [])
  return (
    <>
      <div className = "SLNguoiDung"> 
        <div className="thanhPhanSLND">
          <h1>{listAirline.reduce((total, item) => {
            return total + (item.SOVE || 0)
          }, 0)}</h1>
          <span>Số vé bán trong tháng này</span>
        </div>
        {
          listAirline.map((item) => {
            return <div className="trend_info" style={{border: '1px solid purple', borderRadius: 8, padding: 10}}>
            <h4>{item.TENHANG}</h4>
            <span>{item.SOVE} vé</span>
          </div>
          })
        }
      </div>
    </>
  )
}

export default TrendingHang;