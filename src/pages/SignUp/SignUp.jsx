import React from 'react'

import './SignUp.scss'


import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import FacebookIcon from "../Login/facebook-color-svgrepo-com.svg"
import GoogleIcon from "../../assets/google_icon.svg"

export default function SignUp() {

  return (
    <>
        <h1 className = "dangky">Đăng ký</h1>
        <div className = "tongDK">
            <p className = "tieude">Bạn có thể đăng ký tài khoản <p className = "tour">Tour</p> 
            -<p className = "king">King &nbsp;</p> 
                của mình để truy cập các dịch vụ của chúng tôi.</p>

            <div className = "odangky">
                <h5>Địa chỉ email hoặc số điện thoại</h5>
                <input type = "text box" className = "taikhoan"></input>
            </div>
            
            <Link to={'/otp'}>
                <button type="button" className = "nutdangky">ĐĂNG KÝ</button>
            </Link>
            
            <p>-----------Hoặc sử dụng một trong các lựa chọn này-----------</p>
            
            <div className = "DNbenthu3">
                <Link to="https://www.facebook.com/" className="nav-link icon-container">
                  <Image
                    src={FacebookIcon}
                    alt="Facebook icon"
                    width={90}
                    height={90}
                    className="icon"
                  />
                </Link>

                <Link to="https://accounts.google.com/Login?btmpl=mobile_tier2&hl=vi&service=mail" className="nav-link icon-container">
                  <Image
                    src={GoogleIcon}
                    alt="GoogleIcon"
                    width={90}
                    height={90}
                    className="icon"
                  />
                </Link>
            </div>

            
        </div>
        <p className = "camket">Điều khoản và 
             Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}