import React, { useState } from 'react';
import './Payment.scss';

const PaymentPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Flight to New York', price: 7000000, seat: '12A', class: 'Economy' },
    { id: 2, name: 'Flight to Tokyo', price: 18000000, seat: '7C', class: 'Business' },
    { id: 3, name: 'Flight to Paris', price: 10500000, seat: '15B', class: 'Economy' },
  ]);

  const [customer, setCustomer] = useState({
    name: 'Minh',
    phone: '123-456-7890',
    email: '22520887@gm.uit.edu.vn',
  });

  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [paymentDescription, setPaymentDescription] = useState('Payment with MoMo');

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price, 0);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    switch (method) {
      case 'momo':
        setPaymentDescription('Payment with MoMo, a popular mobile payment service in Vietnam.');
        break;
      case 'vnpay':
        setPaymentDescription('Payment with VNPay, a trusted payment gateway for secure transactions.');
        break;
      case 'counter':
        setPaymentDescription('Pay directly at the counter when you arrive at the airport.');
        break;
      default:
        setPaymentDescription('Please select a payment method.');
    }
  };

  const handlePayment = () => {
    switch (paymentMethod) {
      case 'momo':
        alert('Payment with MoMo successful!');
        break;
      case 'vnpay':
        alert('Payment with VNPay successful!');
        break;
      case 'counter':
        alert('Payment at the counter successful!');
        break;
      default:
        alert('Please select a payment method.');
    }
  };

  return (
    <div className="invoice-container">
      {/* Cột 1: Thông tin khách hàng và bảng hóa đơn */}
      <div className="left-column">
        {/* Thông tin khách hàng */}
        <div className="customer-info">
          <h2>Thông tin khách hàng</h2>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Email:</strong> {customer.email}</p>
        </div>

        {/* Bảng hóa đơn */}
        <div className="invoice-table">
          <table>
            <thead>
              <tr>
                <th>Chuyến bay</th>
                <th>Giá</th>
                <th>Số ghế</th>
                <th>Hạng ghế</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()} ₫</td> {/* Format price to VND */}
                  <td>{item.seat}</td>
                  <td>{item.class}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tổng giá trị hóa đơn */}
          <h3 className="total">Tổng: {calculateTotal().toLocaleString()} ₫</h3>
        </div>
      </div>

      {/* Cột 2: Phương thức thanh toán và nút thanh toán */}
      <div className="right-column">
        {/* Phương thức thanh toán */}
        <div className="payment-method">
          <h3>Phương thức thanh toán</h3>
          <div className="payment-option">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="momo"
                checked={paymentMethod === 'momo'}
                onChange={() => handlePaymentMethodChange('momo')}
              />
              Thanh toán bằng MoMo
            </label>
            {paymentMethod === 'momo' && (
              <div className="payment-description">
                <p>{paymentDescription}</p>
              </div>
            )}
          </div>

          <div className="payment-option">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="vnpay"
                checked={paymentMethod === 'vnpay'}
                onChange={() => handlePaymentMethodChange('vnpay')}
              />
              Thanh toán bằng VNPay
            </label>
            {paymentMethod === 'vnpay' && (
              <div className="payment-description">
                <p>{paymentDescription}</p>
              </div>
            )}
          </div>

          <div className="payment-option">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="counter"
                checked={paymentMethod === 'counter'}
                onChange={() => handlePaymentMethodChange('counter')}
              />
              Thanh toán tại quầy
            </label>
            {paymentMethod === 'counter' && (
              <div className="payment-description">
                <p>{paymentDescription}</p>
              </div>
            )}
          </div>
        </div>

        {/* Nút thanh toán */}
        <button onClick={handlePayment} className="pay-button">
          {`Thanh toán bằng ${paymentMethod === 'momo' ? 'MoMo' : paymentMethod === 'vnpay' ? 'VNPay' : 'quầy'}`}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
