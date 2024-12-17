import React, { useState } from 'react'

import './Password.scss'
import axios from 'axios'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function PassWord() {
    const location = useLocation()
    const navigate = useNavigate()
    const resetEmail = location.state?.resetEmail
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const handleConfirm = () => {
        if(password === '' || confirmedPassword === '') {
            toast.error('Vui lòng nhập đầy đủ các trường !')
        }
        else if(password !== confirmedPassword) {
            toast.error('Mật khẩu và xác nhận mật khẩu phải giống nhau')
        }
        else {
            axios.post('http://localhost:8800/update-password-by-email', {
                resetEmail: resetEmail,
                password: password
            }).then(res => {
                if(res.data.Status === 'Error') {
                    toast.error('Lỗi')
                    console.log('Lỗi: ', res.data.Error)
                }
                else {
                    toast.success('Cập nhật mật khẩu thành công')
                    navigate('/login')
                }
            })
        }
    }
    return (
    <>
        <h1 className = "dangky">Tạo mật khẩu mới</h1>
        <div className = "tong-password">
            <p className = "tieude">Vui lòng nhập mật khẩu mới <p className = "tour">Tour</p> 
            -<p className = "king">King &nbsp;</p> 
                của bạn cho ”địa chỉ gmail”</p>

            <div className = "onhapmk">
                <h5>Nhập mật khẩu mới</h5>
                <input type = "text box" className = "mk"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <h5>Nhập lại mật khẩu mới</h5>
                <input type = "text box" className = "nhaplaimk"
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                ></input>
            </div>
            
            <button type="button" className = "nutxacnhandoimk"
                onClick={() => handleConfirm()}
            >Xác nhận</button>

            
        </div>
        <p className = "camket">Điều khoản và 
             Điều kiện, Chính sách An toàn và Bảo mật</p>
    </>
  )
}