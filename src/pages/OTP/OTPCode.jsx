import React from 'react'

import { Link } from "react-router-dom";
import { BsFillShieldLockFill} from 'react-icons/bs'
import OtpInput from "otp-input-react"
import { useState } from 'react';
import { CgSpinner } from "react-icons/cg"
import { useLocation, useNavigate } from 'react-router-dom';
 
import './OTPCode.scss'

export default function OTPCode() {
    const location = useLocation()
    const navigate = useNavigate()
    let OTPCode = location.state?.OTPCode
    OTPCode = OTPCode.toString()
    const resetEmail = location.state?.resetEmail
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const handleConfirm = () => {
        console.log('check otp received: ', OTPCode)
        console.log('check otp user input: ', otp)
        if(otp === OTPCode) {
            alert('OTP hợp lệ')
            navigate('/password', {
                state: {
                    resetEmail: resetEmail
                }
            })
        }
        else {
            alert('OTP không đúng')
        }
    }
    return (
        <>
            <section className="otp-section">

                <div>
                    <div className = "otp-something">
                        <div style={{textAlign: 'center'}}>
                            <h1>Nhập mã OTP</h1>
                        </div>
                        <p className = "otp-h1">
                            Chúng tôi vừa gửi mã OTP xác minh đến địa chỉ {resetEmail}. Email chỉ có hiệu lực trong 10 phút kể từ thời điểm nhận.
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
                            <button className = "otp-button"
                                onClick={() => handleConfirm()}
                            >
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
