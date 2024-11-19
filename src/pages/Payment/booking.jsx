import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './booking.css'; // Assuming you have similar CSS in a styles.css file

const BookingForm = () => {
  const navigate = useNavigate(); // Initialize navigate

  const [contactInfo, setContactInfo] = useState({
    lastName: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const [passengerInfo, setPassengerInfo] = useState({
    title: '',
    passengerLastName: '',
    passengerFullName: '',
    dob: '',
    nationality: '',
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handlePassengerChange = (e) => {
    const { name, value } = e.target;
    setPassengerInfo({ ...passengerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log('Contact Info:', contactInfo);
    console.log('Passenger Info:', passengerInfo);
  };

  // Function to handle Pay button click
  const handlePayClick = () => {
    // Navigate to the invoice/payment page
    navigate('/payment');
  };

  return (
    <div className="container">
      <div className="two-column-layout">
        <div className="left-column">
          <div className="contact-info">
            <h3>Thông tin liên hệ (nhận vé/phiếu thanh toán)</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="lastName">Họ (vd: Nguyen)*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={contactInfo.lastName}
                onChange={handleContactChange}
                required
              />

              <label htmlFor="fullName">Tên Đệm & Tên (vd: Thi Ngoc Anh)*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={contactInfo.fullName}
                onChange={handleContactChange}
                required
              />

              <label htmlFor="phone">Điện thoại di động*</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleContactChange}
                required
              />

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                required
              />
            </form>
          </div>

          <div className="passenger-info">
            <h3>Thông tin hành khách</h3>
            <form id="passenger-form" onSubmit={handleSubmit}>
              <label htmlFor="title">Danh xưng*</label>
              <select
                id="title"
                name="title"
                value={passengerInfo.title}
                onChange={handlePassengerChange}
                required
              >
                <option value="">Chọn</option>
                <option value="mr">Ông</option>
                <option value="ms">Bà</option>
              </select>

              <label htmlFor="passengerLastName">Họ (vd: Nguyen)*</label>
              <input
                type="text"
                id="passengerLastName"
                name="passengerLastName"
                value={passengerInfo.passengerLastName}
                onChange={handlePassengerChange}
                required
              />

              <label htmlFor="passengerFullName">Tên Đệm & Tên (vd: Thi Ngoc Anh)*</label>
              <input
                type="text"
                id="passengerFullName"
                name="passengerFullName"
                value={passengerInfo.passengerFullName}
                onChange={handlePassengerChange}
                required
              />

              <label htmlFor="dob">Ngày sinh*</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={passengerInfo.dob}
                onChange={handlePassengerChange}
                required
              />

              <label htmlFor="nationality">Quốc tịch*</label>
              <select
                id="nationality"
                name="nationality"
                value={passengerInfo.nationality}
                onChange={handlePassengerChange}
                required
              >
                <option value="">Chọn Quốc Tịch</option>
                <option value="vn">Việt Nam</option>
                <option value="us">United States</option>
                {/* Add more countries as needed */}
              </select>
            </form>
          </div>
        </div>

        <div className="right-column">
          <div className="flight-summary">
            <h3>Tóm tắt chuyến bay</h3>
            <div className="flight-info">
              <p>
                <strong>Chuyến bay đi:</strong> TP HCM (SGN) → Hà Nội (HAN)
              </p>
              <p>
                <strong>Thời gian:</strong> T2, 6 thg 1, 2025 05:45 → 07:55
              </p>
              <p>
                <strong>Hãng hàng không:</strong> Vietravel Airlines
              </p>
              <p>
                <strong >Giá bạn trả:</strong> 1,749,705 VND
              </p>
            </div>
          </div>

          {/* Pay Button */}
          <div className="pay-button-container">
            <button onClick={handlePayClick} className="pay-button">
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
