import React from 'react'

import { Link } from "react-router-dom";

import './OTPCode.scss'

export default function Login() {
    var diachiemail;
    return (
        <>
            <h1>Nhập mã OTP</h1>
            <p>Chúng tôi vừa gửi mã OTP xác minh {diachiemail}. 
                Email chỉ có hiệu lực trong 10 phút kể từ thời điểm nhận.</p>
            <h2>Nhập mã OTP</h2>
            <div class = "nhapmaOTP">
                <input type = "textbox"></input>
                <input type = "textbox"></input>
                <input type = "textbox"></input>
                <input type = "textbox"></input>
                <input type = "textbox"></input>
                <input type = "textbox"></input>
            </div>
            <Link to = {'/password'}>
                <button type="button" class = "nutxacnhan" >Xác nhận</button>
            </Link>
            
        </>
    )
}
