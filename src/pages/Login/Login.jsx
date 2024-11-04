import React from 'react'

import './Login.scss'

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";



import FacebookIcon from "./facebook-color-svgrepo-com.svg"
import GoogleIcon from "../../assets/google_icon.svg"


export default function Login() {

  return (
    <>
    <h1 class  = "dangnhap">ĐĂNG NHẬP</h1>
    <div class = "tongDN">
      
      <div class = "dangnhapbangtk">
        
        <p>Bạn có thể đăng nhập tài khoản <p class = "tour">Tour</p> 
        -<p class = "king">King &nbsp;</p> 
        của mình để truy cập các dịch vụ của chúng tôi.</p>
        
        <div class = "odangnhap">
          <h5>Địa chỉ email hoặc số điện thoại</h5>
          <input type = "text box" class = "taikhoan"></input>
          <h5>Mật khẩu</h5>
          <input type = "password" class = "matkhau"></input>
        </div>

        <Link>Quên mật khẩu</Link>
        <Link to={'/home'}>
          <button type="button" class = "nutdangnhap">ĐĂNG NHẬP</button>
        </Link>
        Bạn cần một tài khoản? <Link to = {'/signup'}>Đăng ký</Link>
      </div>
      
      <div class = "dangnhapbangphuongthuckhac">
        <p>Hoặc sử dụng một trong các lựa chọn này </p>
        <div class = "DNbenthu3">
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
        <Link to={'/otp'} class = "dangnhapbangma">Hoặc, đăng nhập bằng mã bảo mật</Link>
      </div>
      
    </div>
    <p class = "camket">Điều khoản và 
    Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}