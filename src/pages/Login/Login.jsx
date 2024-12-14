import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import Cookies from 'universal-cookie'
import { jwtDecode } from "jwt-decode";

import FacebookIcon from "./facebook-color-svgrepo-com.svg"
import GoogleIcon from "../../assets/google_icon.svg"

import { ContextStore } from '../../context/Context';

export default function Login() {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const {
    accessToken, setAccessToken,
      refreshToken, setRefreshToken,
      userid, setUserid,
      name, setName,
      isAdmin, setIsAdmin,
      useravatarurl, setUseravatarurl
  } = useContext(ContextStore)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignin = () => {
    if(email === '' || password === '') {
      alert('Vui lòng nhập đầy đủ các trường')
    }
    else {
      axios.post('http://localhost:8800/login', {
        email,
        password
      }).then(res => {
        if(res.data.Status === 'Success') {
          alert('Đăng nhập thành công')
          setAccessToken(res.data.accessToken) // set accessToken
          const decodedAccessToken = jwtDecode(res.data.accessToken)
          console.log('decodedAccessToken: ', decodedAccessToken)
          cookies.set("accessToken", res.data.accessToken, {

          })
          setRefreshToken(res.data.refreshToken) // set refreshToken
          const decodedRefreshToken = jwtDecode(res.data.refreshToken)
          console.log('decodedRefreshToken: ', decodedRefreshToken)
          cookies.set("refreshToken", res.data.refreshToken, {

          })
          setUserid(decodedAccessToken.userid);
          setIsAdmin(decodedAccessToken.isadmin);
          setUseravatarurl(decodedAccessToken.useravatarurl)
          setName(decodedAccessToken.name)
          navigate('/')
        }
        else {
          alert(res.data.Error)
          setAccessToken(null)
        }
      })
      console.log('hello')
    }
  }
  const handleForgotPass = () => {
    if(email === '') alert('Vui lòng nhập email !')
    else {
      axios.get('http://localhost:8800/get-user-by-email?email=' + email).then(res => {
        console.log('check res when get-user-by-email: ', res.data.length)
        if(res.data.length) { // exist an user with that email
          const OTPCode = Math.floor(Math.random() * 900000 + 100000) // gửi mã OTP này đến mail của user
          axios.post("http://localhost:8800/send-recovery-email", { // gửi mã otp đến mail
            OTP: OTPCode,
            recipient_email: email
          }).then(res => {
            if(res.data.Status === 'Success') {
              console.log('Send email successfully !')
              navigate('/otp', {
                state: {
                  OTPCode: OTPCode,
                  resetEmail: email
                }
              })
            }
          })
        }
        else {
          alert('Không tồn tại người dùng')
        }
      })
    }
  }
  return (
    <>
    <h1 className  = "dangnhap">ĐĂNG NHẬP</h1>
    <div className = "tongDN">
      
      <div className = "dangnhapbangtk">
        
        <div>
          Bạn có thể đăng nhập tài khoản &nbsp;
          <p className = "tour">Tour</p>-<p className = "king">King &nbsp;</p>
          của mình để truy cập các dịch vụ của chúng tôi.
        </div>
        
        <div className = "odangnhap">
          <h5>Địa chỉ email</h5>
          <input type = "text box" className = "taikhoan"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Mật khẩu</h5>
          <input type = "password" className = "matkhau"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <p style={{cursor: 'pointer'}}
          onClick={() => handleForgotPass()}
        >Quên mật khẩu</p>
        <button type="button" className = "nutdangnhap"
          onClick={() => handleSignin()}
        >ĐĂNG NHẬP</button>
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