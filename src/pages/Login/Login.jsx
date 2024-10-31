import React from 'react'

import './Login.scss'

import { Image } from "react-bootstrap"
import { NavLink } from "react-router-dom";



import FacebookIcon from "../../assets/facebook_icon.svg"
import GoogleIcon from "../../assets/google_icon.svg"


export default function Login() {
  return (
    <div>

      <div>
        <h1>ĐĂNG NHẬP</h1>
        <p>Bạn có thể đăng nhập tài khoản Booking.com của mình để truy cập các dịch vụ của chúng tôi.</p>
      </div>
      
      <div>
        <h2>Địa chỉ email hoặc số điện thoại</h2>
        <input type = "text box"></input>
      </div>

      <button>ĐĂNG NHẬP</button>
      
      <div>
        <NavLink to="https://www.facebook.com/" className="nav-link icon-container">
                <Image
                  src={FacebookIcon}
                  alt="Facebook icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                </NavLink>

        <NavLink to="https://accounts.google.com/Login?btmpl=mobile_tier2&hl=vi&service=mail" className="nav-link icon-container">
                <Image
                  src={GoogleIcon}
                  alt="GoogleIcon"
                  width={48}
                  height={48}
                  className="icon"
                />
                </NavLink>
      </div>

      <p>Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các Điều khoản và 
      Điều kiện cũng như Chính sách An toàn và Bảo mật của chúng tôi</p>
      
    </div>
  )
}