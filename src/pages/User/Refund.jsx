import React from 'react';
import './Refund.scss';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa'; // Importing FontAwesome Icons

const Refund = () => {
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
    // <div className="layout">
    //   {/* Sidebar */}
    //   <div className="sidebar">
    //     <div className="profile">
    //       <div className="avatar"></div>
    //       <div className="name">TRẦN MINH</div>
    //     </div>
    //     <ul className="menu">
    //       <li className="menu-item" onClick={handleProfile}>
    //         <FaUser className="menu-icon" /> TÀI KHOẢN
    //       </li>
    //       <li className="menu-item" onClick={handleBookingHistory}>
    //         <FaShoppingCart className="menu-icon" /> ĐẶT CHỖ CỦA TÔI
    //       </li>
    //       <li className="menu-item" onClick={handleTransactionHistory}>
    //         <FaListAlt className="menu-icon" /> DANH SÁCH GIAO DỊCH
    //       </li>
    //       <li className="menu-item" onClick={handleRefund}>
    //         <FaMoneyBillAlt className="menu-icon" /> YÊU CẦU HOÀN TIỀN
    //       </li>
    //     </ul>
    //   </div>
      <div className="content">
        <h2 className="section-title">YÊU CẦU HOÀN TIỀN</h2>

        {/* Refund Request List */}
        <div className="refund-request">
          <div className="refund-item">
            <img src="hotel-image.jpg" alt="Khách Sạn A" className="refund-image" />
            <div className="refund-info">
              <h3>VÉ A</h3>
              <p><strong>Ngày thanh toán:</strong> xx/xx/xxxx</p>
              <p><strong>Mã đặt chỗ:</strong> 3232423</p>
              <p><strong>Giá trị:</strong> 10,000,000 VND</p>
              <p className="status completed">Hoàn thành</p>
            </div>
          </div>

          <div className="refund-item">
            <img src="car-image.jpg" alt="Vé Xe B" className="refund-image" />
            <div className="refund-info">
              <h3>VÉ B</h3>
              <p><strong>Ngày thanh toán:</strong> xx/xx/xxxx</p>
              <p><strong>Mã đặt chỗ:</strong> 3232423</p>
              <p><strong>Giá trị:</strong> 10,000,000 VND</p>
              <p className="status in-progress">Đang thực hiện</p>
            </div>
          </div>
          <div className="refund-item">
            <img src="car-image.jpg" alt="Vé Xe B" className="refund-image" />
            <div className="refund-info">
              <h3>VÉ C</h3>
              <p><strong>Ngày thanh toán:</strong> xx/xx/xxxx</p>
              <p><strong>Mã đặt chỗ:</strong> 3232423</p>
              <p><strong>Giá trị:</strong> 10,000,000 VND</p>
              <p className="status refuse">Từ chối</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Refund;
