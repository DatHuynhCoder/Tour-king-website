import React, { useState } from 'react';
import './TransactionHistory.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa'; // Importing FontAwesome Icons
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TransactionHistory = () => {
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
  const handleRefund = () => {
    // Navigate to the invoice/payment page
    navigate('/Refund');
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="container">
      {/* Sidebar */}
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
          <li className="menu-item" onClick={handleRefund}>
            <FaMoneyBillAlt className="menu-icon" /> YÊU CẦU HOÀN TIỀN
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Date Filter */}
        <div className="filter">
          <div className="filter-item">
            <i className="filter-icon icon-calendar"></i>
            <label className="filter-label">Từ</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Chọn ngày bắt đầu"
              className="filter-datepicker"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="filter-item">
            <i className="filter-icon icon-calendar"></i>
            <label className="filter-label">Đến</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Chọn ngày kết thúc"
              className="filter-datepicker"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>

        {/* Transaction List */}
        <div className="box">
          <h2 className="section-title">Tháng xx năm xxxx</h2>
          <div className="transaction-item">
            <img src="hotel.jpg" alt="Khách sạn A" className="transaction-image" />
            <div className="transaction-info">
              <div className="transaction-name">VÉ A</div>
              <div className="transaction-details">
                Mã đặt chỗ: 3232423 Giá trị: 10000000 VND
              </div>
              <div className="transaction-details">
                Ngày thanh toán: xx/xx/xxxx Phương thức thanh toán: Paypal
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <h2 className="section-title">Tháng xx năm xxxx</h2>
          <div className="transaction-item">
            <img src="ticket.jpg" alt="Vé xe B" className="transaction-image" />
            <div className="transaction-info">
              <div className="transaction-name">VÉ B</div>
              <div className="transaction-details">
                Mã đặt chỗ: 3232423 Giá trị: 10000000 VND
              </div>
              <div className="transaction-details">
                Ngày thanh toán: xx/xx/xxxx Phương thức thanh toán: QRPAY
              </div>
            </div>
          </div>
          <div className="transaction-item">
            <img src="tour.jpg" alt="Tour C" className="transaction-image" />
            <div className="transaction-info">
              <div className="transaction-name">VÉ C</div>
              <div className="transaction-details">
                Mã đặt chỗ: 3232423 Giá trị: 10000000 VND
              </div>
              <div className="transaction-details">
                Ngày thanh toán: xx/xx/xxxx Phương thức thanh toán: MoMo E-wallet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
