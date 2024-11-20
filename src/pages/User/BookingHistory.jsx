import React from 'react';
import './Refund.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa'; // Importing FontAwesome Icons

const BookingHistory = () => {
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
        {/* Current Bookings */}
        <div className="box">
          <h2 className="section-title">Vé điện tử & phiếu thanh toán hiện hành</h2>
          <div className="current-bookings">
            <div className="booking-item">
              <img src="hotel.jpg" alt="Khách sạn A" className="booking-image" />
              <div className="booking-info">
                <div className="booking-name">VÉ A</div>
                <div className="booking-details">Mã đặt chỗ: 3232423 Giá trị: 10000000 VND</div>
              </div>
            </div>
            <div className="booking-item">
              <img src="ticket.jpg" alt="Vé xe B" className="booking-image" />
              <div className="booking-info">
                <div className="booking-name">VÉ B</div>
                <div className="booking-details">Mã đặt chỗ: 3232423 Giá trị: 10000000 VND</div>
              </div>
            </div>
            <div className="booking-item">
              <img src="tour.jpg" alt="Tour C" className="booking-image" />
              <div className="booking-info">
                <div className="booking-name">VÉ C</div>
                <div className="booking-details">Mã đặt chỗ: 3232423 Giá trị: 10000000 VND</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="box">
          <h2 className="section-title">LỊCH SỬ GIAO DỊCH</h2>
          <p>
            Xem <a href="#" className="history-link">lịch sử giao dịch</a> của bạn
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
