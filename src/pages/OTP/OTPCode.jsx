import React from 'react'

import { Link } from "react-router-dom";
import { BsFillShieldLockFill} from 'react-icons/bs'
import OtpInput from "otp-input-react"
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg"
 
import './OTPCode.scss'

export default function Login() {
    var diachiemail;
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <>
            <section className="otp-section">

                <div>
                    <div className = "otp-something">
                        <h1>Nhập mã OTP</h1>
                        <p className = "otp-h1">
                            Chúng tôi vừa gửi mã OTP xác minh “địa chỉ email”. Email chỉ có hiệu lực trong 10 phút kể từ thời điểm nhận.
                        </p>

                        <>
                            <div className= "otp-Bs">
                                <BsFillShieldLockFill />
                            </div>
                            <label htmpFor="ph" className="otp-label">
                                Nhập mã OTP
                            </label>
                            <OtpInput 
                                value={otp}          // Gán trạng thái giá trị OTP
                                onChange={setOtp}     // Cập nhật trạng thái khi nhập
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                                className="otp-input"
                            ></OtpInput>
                            <button className = "otp-button">
                                
                                <span>Xác nhận</span>
                            </button>
                        </>
                        
                    </div>
                    
                </div>
                
            </section>
            <div class = "OTP-dk">
                Điều khoản và Điều kiện, Chính sách An toàn và Bảo mật
            </div>
        </>
    )
}
