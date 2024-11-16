import React from 'react'

import './Password.scss'


import { Link } from "react-router-dom";


export default function PassWord() {

  return (
    <>
        <h1 className = "dangky">Đăng ký</h1>
        <div className = "tong-password">
            <p className = "tieude">Vui lòng nhập mật khẩu mới <p className = "tour">Tour</p> 
            -<p className = "king">King &nbsp;</p> 
                của bạn cho ”địa chỉ gmail”</p>

            <div className = "onhapmk">
                <h5>Nhập mật khẩu mới</h5>
                <input type = "text box" className = "mk"></input>
                <h5>Nhập lại mật khẩu mới</h5>
                <input type = "text box" className = "nhaplaimk"></input>
            </div>
            
            <Link to={'/home'}>
                <button type="button" className = "nutxacnhandoimk">Xác nhận</button>
            </Link>

            
        </div>
        <p className = "camket">Điều khoản và 
             Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}