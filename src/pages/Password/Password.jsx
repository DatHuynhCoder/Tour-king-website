import React from 'react'

import './Password.scss'


import { Link } from "react-router-dom";


export default function PassWord() {

  return (
    <>
        <h1 class = "dangky">Đăng ký</h1>
        <div class = "tong-password">
            <p class = "tieude">Vui lòng nhập mật khẩu mới <p class = "tour">Tour</p> 
            -<p class = "king">King &nbsp;</p> 
                của bạn cho ”địa chỉ gmail”</p>

            <div class = "onhapmk">
                <h5>Nhập mật khẩu mới</h5>
                <input type = "text box" class = "mk"></input>
                <h5>Nhập lại mật khẩu mới</h5>
                <input type = "text box" class = "nhaplaimk"></input>
            </div>
            
            <Link to={'/home'}>
                <button type="button" class = "nutxacnhandoimk">Xác nhận</button>
            </Link>

            
        </div>
        <p class = "camket">Điều khoản và 
             Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}