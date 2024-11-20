import React from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa'; // Importing FontAwesome Icons
const UserProfile = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookingHistory = () => {
    // Navigate to the invoice/payment page
    navigate('/BookingHistory');
  };
  const handleProfile = () => {
    // Navigate to the invoice/payment page
    navigate('/User');
  };
  const handleTransactionHistory = () => {
    // Navigate to the invoice/payment page
    navigate('/TransactionHistory');
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <div className="avatar"></div>
          <div className="name">TRẦN MINH</div>
        </div>
        <ul className="menu">
          <li className="menu-item" onClick={handleProfile}>
            <FaUser className="menu-icon" /> TÀI KHOẢN
          </li>
          <li className="menu-item" onClick={handleBookingHistory}>
            <FaShoppingCart className="menu-icon" /> ĐẶT CHỖ CỦA TÔI
          </li>
          <li className="menu-item" onClick={handleTransactionHistory}>
            <FaListAlt className="menu-icon" /> DANH SÁCH GIAO DỊCH
          </li>
          <li className="menu-item">
            <FaMoneyBillAlt className="menu-icon" /> YÊU CẦU HOÀN TIỀN
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Personal Information Box */}
        <div className="box">
          <h2 className="section-title">THÔNG TIN CÁ NHÂN</h2>
          <form className="form">
            <div className="form-group">
              <label>Tên của bạn</label>
              <input type="text" className="input" />
            </div>
            <div className="form-group">
              <label>Giới tính</label>
              <select className="input">
                <option value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
            <div className="form-group">
              <label>Ngày sinh</label>
              <div className="birth-date">
                <input type="number" placeholder="Ngày" className="input-date" />
                <input type="number" placeholder="Tháng" className="input-date" />
                <input type="number" placeholder="Năm" className="input-date" />
              </div>
            </div>
            <div className="form-group">
              <label>Email của bạn</label>
              <input type="email" className="input" />
            </div>
            <div className="form-group">
              <label>Số điện thoại của bạn</label>
              <input type="tel" className="input" />
            </div>
            <button type="submit" className="submit-button">Lưu Thông Tin</button>
          </form>
        </div>

        {/* Linked Accounts Box */}
        <div className="box">
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
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
