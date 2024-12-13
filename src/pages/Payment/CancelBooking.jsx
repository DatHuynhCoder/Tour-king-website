import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CancelBooking.scss';

const CancelBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;
  const [reason, setReason] = useState(''); // State for cancellation reason

  if (!booking) {
    return <p>Không tìm thấy thông tin vé!</p>;
  }

  const handleConfirmCancel = () => {
    if (!reason.trim()) {
      alert('Vui lòng nhập lý do hủy vé.');
      return;
    }

    alert(`Vé ${booking.name} Yêu cầu hủy vé đã được gửi với lí do ${reason}`);
    navigate('/BookingHistory'); // Navigate back to booking history
  };

  return (
    <div className="cancel-booking">
      <h2>Hủy vé</h2>
      <p>Chi tiết vé:</p>
      <div className="booking-details">
        <p><strong>Tên vé:</strong> {booking.name}</p>
        <p><strong>Chi tiết:</strong> {booking.details}</p>
      </div>
      <div className="cancel-reason">
        <label htmlFor="reason">Lý do hủy vé:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Nhập lý do hủy vé của bạn..."
        ></textarea>
      </div>
      <div className="actions">
        <button onClick={handleConfirmCancel} className="confirm-button">Xác nhận hủy</button>
        <button onClick={() => navigate('/BookingHistory')} className="cancel-button">Quay lại</button>
      </div>
    </div>
  );
};

export default CancelBooking;
