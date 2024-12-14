import React, { useContext, useState } from 'react';
import './UserProfile.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa';
import DefaultAvatar from '../../assets/defaultAvatar.png'
import { ContextStore } from '../../context/Context';

import axios from 'axios'

const UserProfile = () => {
  const {
    accessToken, setAccessToken,
    refreshToken, setRefreshToken,
    userid, setUserid,
    name, setName,
    isAdmin, setIsAdmin,
    useravatarurl, setUseravatarurl
  } = useContext(ContextStore);
  const navigate = useNavigate();

  // Tạo state cho các input
  const [yourName, setYourName] = useState(name)
  const [gender, setGender] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const isAllNumbers = (str) => {
    if (!str) return false;
    return /^\d+$/.test(str);
  }

  // Hàm kiểm tra năm nhuận
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  // Hàm kiểm tra ngày, tháng, năm đã chuyển đổi
  function isValidDate(day, month, year) {
    // Kiểm tra năm hợp lệ (ví dụ: từ 1900 đến 2100)
    if (year < 1900 || year > 2100) {
      return false;
    }

    // Kiểm tra tháng hợp lệ (1 - 12)
    if (month < 1 || month > 12) {
      return false;
    }

    // Xác định số ngày tối đa trong tháng
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Kiểm tra năm nhuận
    if (month === 2 && isLeapYear(year)) {
      daysInMonth[1] = 29; // Tháng 2 có 29 ngày nếu là năm nhuận
    }

    // Kiểm tra ngày hợp lệ
    if (day < 1 || day > daysInMonth[month - 1]) {
      return false;
    }

    return true;
  }
  function isValidDateString(dayStr, monthStr, yearStr) {
  // Chuyển đổi dữ liệu từ string sang số nguyên
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);

    // Kiểm tra xem giá trị có phải là số hợp lệ hay không
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false;
    }

    // Gọi hàm kiểm tra ngày hợp lệ
    return isValidDate(day, month, year);
  }

  
  
  // Hàm xử lý khi nhấn submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // In ra console để kiểm tra dữ liệu
    const birth = `${birthYear}-${birthMonth}-${birthDay}` 
    if(!isAllNumbers(phone)) {
      alert('Số điện thoại không hợp lệ')
    }
    else if(!isValidDateString(birthDay,birthMonth,birthYear)) {
      alert('Vui lòng nhập ngày tháng năm sinh hợp lệ')
    }
    else {
      console.log({
        yourName,
        gender,
        birthDate: birth,
        email,
        phone,
      });
      // axios.post('http://localhost:8800/update-user-info', {
      //   MaNguoiDung: userid,
      //   TenDayDu: yourName,
      //   SDT: phone,
      //   NgaySinh: birth,
      // })
    }
  };

  return (
    <div className="content">
      <div className="box">
        <h2 className="section-title">THÔNG TIN CÁ NHÂN</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên của bạn</label>
            <input 
              type="text" 
              className="input" 
              placeholder="Nhập tên của bạn" 
              value={name} 
              onChange={(e) => setYourName(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <select 
              className="input" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ngày sinh</label>
            <div className="birth-date">
              <input 
                type="text" 
                placeholder="Ngày" 
                className="input-date" 
                value={birthDay} 
                onChange={(e) => setBirthDay(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Tháng" 
                className="input-date" 
                value={birthMonth} 
                onChange={(e) => setBirthMonth(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Năm" 
                className="input-date" 
                value={birthYear} 
                onChange={(e) => setBirthYear(e.target.value)} 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Số điện thoại của bạn</label>
            <input 
              type="tel" 
              className="input" 
              placeholder="Nhập số điện thoại của bạn" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
          </div>
          <button type="submit" className="submit-button">Lưu Thông Tin</button>
        </form>
      </div>

      {/* <div className="box">
        <h2 className="section-title">TÀI KHOẢN ĐÃ LIÊN KẾT</h2>
        <div className="linked-accounts">
          <button className="link-button">
            <img src="google-icon.png" alt="Google" className="icon" />
            Google
          </button>
          <button className="link-button">
            <img src="facebook-icon.png" alt="Facebook" className="icon" />
            Facebook
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default UserProfile;
