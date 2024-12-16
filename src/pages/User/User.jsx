import React, { useContext } from 'react';
import './User.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa';
import DefaultAvatar from '../../assets/defaultAvatar.png'
import { ContextStore } from '../../context/Context';

const User = () => {
  const {
    accessToken, setAccessToken,
    refreshToken, setRefreshToken,
    userid, setUserid,
    name, setName,
    isAdmin, setIsAdmin,
    useravatarurl, setUseravatarurl
  } = useContext(ContextStore)
  const navigate = useNavigate();

  const handleBookingHistory = () => {
    // Navigate to the invoice/payment page
    navigate('/User/BookingHistory');
  };

  const handleProfile = () => {
    // Navigate to the invoice/payment page
    navigate('/User');
  };
  const handleTransactionHistory = () => {
    // Navigate to the invoice/payment page
    navigate('/User/TransactionHistory');
  };
  const handleRefund = () => {
    // Navigate to the invoice/payment page
    navigate('/User/Refund');
  };

  return (
    <div className="user-container">
      <div className="sidebar">
        <div className="profile">
          <div className="avatar">
            <img src={useravatarurl ? useravatarurl : DefaultAvatar} style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
          </div>
          <div className="name">{name === '' ? 'Loading ...' : name}</div>
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

      <Outlet/>

    </div>
  );
};

export default User;