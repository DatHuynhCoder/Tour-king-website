import React from 'react'

import './Login.scss'

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";




import FacebookIcon from "./facebook-color-svgrepo-com.svg"
import GoogleIcon from "../../assets/google_icon.svg"


export default function Login() {

  return (
    <>
    <h1 className  = "dangnhap">ĐĂNG NHẬP</h1>
    <div className = "tongDN">
      
      <div className = "dangnhapbangtk">
        
        <p>Bạn có thể đăng nhập tài khoản <p className = "tour">Tour</p> 
        -<p className = "king">King &nbsp;</p> 
        của mình để truy cập các dịch vụ của chúng tôi.</p>
        
        <div className = "odangnhap">
          <h5>Địa chỉ email hoặc số điện thoại</h5>
          <input type = "text box" className = "taikhoan"></input>
          <h5>Mật khẩu</h5>
          <input type = "password" className = "matkhau"></input>
        </div>

        <Link>Quên mật khẩu</Link>
        <Link to={'/home'}>
          <button type="button" className = "nutdangnhap">ĐĂNG NHẬP</button>
        </Link>
        Bạn cần một tài khoản? <Link to = {'/signup'}>Đăng ký</Link>
      </div>
      
      <div className = "dangnhapbangphuongthuckhac">
        <p>Hoặc sử dụng một trong các lựa chọn này </p>
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
        <Link to={'/otp'} className = "dangnhapbangma">Hoặc, đăng nhập bằng mã bảo mật</Link>
      </div>
      
    </div>
    <p className = "camket">Điều khoản và 
    Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}