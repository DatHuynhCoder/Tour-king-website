import React, { useState } from 'react';
import './BookingHistory.scss';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa';

const BookingHistory = () => {
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(null); // State for selected booking

  const handleBookingHistory = () => {
    navigate('/BookingHistory');
  };

  const handleProfile = () => {
    navigate('/User');
  };

  const handleTransactionHistory = () => {
    navigate('/TransactionHistory');
  };

  const handleRefund = () => {
    navigate('/Refund');
  };

  const bookings = [
    {
      id: 1,
      name: 'VÉ A',
      details: 'Mã đặt chỗ: 3232423 Giá trị: 10000000 VND',
      image: 'hotel.jpg',
    },
    {
      id: 2,
      name: 'VÉ B',
      details: 'Mã đặt chỗ: 3232424 Giá trị: 20000000 VND',
      image: 'ticket.jpg',
    },
    {
      id: 3,
      name: 'VÉ C',
      details: 'Mã đặt chỗ: 3232425 Giá trị: 15000000 VND',
      image: 'tour.jpg',
    },
  ];

  const handleBookingClick = (booking) => {
    setSelectedBooking(booking); // Set the selected booking
  };

  const handleCancelBooking = () => {
    // Redirect to the cancel booking page with the selected booking info
    navigate('/CancelBooking', { state: { booking: selectedBooking } });
  };

  const handleCloseDialog = () => {
    setSelectedBooking(null); // Close the dialog
  };

  return (
    <div className="layout">
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
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="booking-item"
                onClick={() => handleBookingClick(booking)}
              >
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="booking-image"
                />
                <div className="booking-info">
                  <div className="booking-name">{booking.name}</div>
                  <div className="booking-details">{booking.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="box">
          <h2 className="section-title">LỊCH SỬ GIAO DỊCH</h2>
          <p>
            Xem <a href="./TransactionHistory" className="history-link">lịch sử giao dịch</a> của bạn
          </p>
        </div>
      </div>

      {selectedBooking && (
        <div className="cancel-dialog">
          <div className="dialog-content">
            <h3>{selectedBooking.name}</h3>
            <p>{selectedBooking.details}</p>
            <button onClick={handleCancelBooking}>Hủy vé</button>
            <button onClick={handleCloseDialog}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
