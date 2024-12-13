import React from "react";
import { Link } from "react-router-dom";
import "./OrderStatus.scss";

const OrderStatus = ({ isSuccess, message }) => {
  return (
    <div className="status-container">
      <div className={`status-card ${isSuccess ? "success" : "failure"}`}>
        <div className="status-icon">
          {isSuccess ? (
            <i className="icon-check">✔</i>
          ) : (
            <i className="icon-error">✖</i>
          )}
        </div>
        <h2 className="status-title">
          {isSuccess ? "Thanh toán thành công đơn hàng #23fd2" : "Thanh toán thất bại đơn hàng #23fd2"}
        </h2>
        <p className="status-message">{message}</p>
        <Link 
          to={isSuccess ? "/BookingHistory" : "/Payment"} 
          className={`action-button ${isSuccess ? "success" : "failure"}`}
        >
          {isSuccess ? "Kiểm tra đơn hàng" : "Thanh toán lại"}
        </Link>
      </div>
    </div>
  );
};

export default OrderStatus;