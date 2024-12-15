import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.scss'
import axios from 'axios'

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import FacebookIcon from "../Login/facebook-color-svgrepo-com.svg"
import GoogleIcon from "../../assets/google_icon.svg"

export default function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleSignup = () => {
    if(password !== confirmedPassword) {
      alert('Xác nhận mật khẩu không đúng')
    }
    else
    axios.post('http://localhost:8800/register', {
      email,
      password
    }).then(res => {
      if(res.data.Status === 'Success') {
        alert('Đăng kí thành công')
        navigate('/login')
      }
      else {
        alert(res.data.Error)
      }
    })
  }
  return (
    <>
        <h1 className = "dangky">Đăng ký</h1>
        <div className = "tongDK">
            <div className = "tieude">
              Bạn có thể đăng ký tài khoản &nbsp;
              <p className = "tour">Tour</p>-<p className = "king">King &nbsp;</p> 
                của mình để truy cập các dịch vụ của chúng tôi.
            </div>

            <div className = "odangky">
                <h5>Địa chỉ email</h5>
                <input type = "text box" className = "taikhoan"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <h5>Mật khẩu</h5>
                <input type = "password" className = "taikhoan"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <h5>Xác nhận mật khẩu</h5>
                <input type = "password" className = "taikhoan"
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                ></input>
                <i>Lưu ý: Khi bấm Đăng ký tức là bạn đã đồng ý với điều kiện giao dịch chung & chính sách bảo mật của chúng tôi</i>
            </div>
            
            <button type="button" className = "nutdangky"
              onClick={() => handleSignup()}
            >ĐĂNG KÝ</button>
            
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