import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import './Payment.scss';
import axios from 'axios'

const PaymentPage = () => {
  const location = useLocation()
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
  const MaVe = location?.state?.MaVe ?? null
  const MaNguoiDung = location?.state?.MaNguoiDung ?? null
  const TenDiemDen = location?.state?.TenDiemDen ?? null
  const Gia = location?.state?.Gia ?? null
  const MaGhe = location?.state?.MaGhe ?? null
  const TenLoaiGhe = location?.state?.TenLoaiGhe ?? null
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [qt, setQT] = useState('')
  const [hc, setHC] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const [paymentDescription, setPaymentDescription] = useState('Payment with MoMo');

  const isAllNumbers = (str) => {
    if (!str) return false;
    return /^\d+$/.test(str);
  }

  // Hàm kiểm tra năm nhuận
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  // Hàm kiểm tra ngày, tháng, năm đã chuyển đổi
  function isValidDate(day, month, year) {
    // Kiểm tra năm hợp lệ (ví dụ: từ 1900 đến 2100)
    if (year < 1900 || year > 2100) {
      return false;
    }

    // Kiểm tra tháng hợp lệ (1 - 12)
    if (month < 1 || month > 12) {
      return false;
    }

    // Xác định số ngày tối đa trong tháng
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Kiểm tra năm nhuận
    if (month === 2 && isLeapYear(year)) {
      daysInMonth[1] = 29; // Tháng 2 có 29 ngày nếu là năm nhuận
    }

    // Kiểm tra ngày hợp lệ
    if (day < 1 || day > daysInMonth[month - 1]) {
      return false;
    }

    return true;
  }
  function isValidDateString(dayStr, monthStr, yearStr) {
  // Chuyển đổi dữ liệu từ string sang số nguyên
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);

    // Kiểm tra xem giá trị có phải là số hợp lệ hay không
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false;
    }

    // Gọi hàm kiểm tra ngày hợp lệ
    return isValidDate(day, month, year);
  }

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
    const birth = `${year}-${month}-${day}`
    const date = new Date();
    const curr_day = date.getDate();
    const curr_month = date.getMonth() + 1;
    const curr_year = date.getFullYear();
    const paydate = `${year}-${month}-${day}`;
    if(!isAllNumbers(phone)) {
      alert('Số điện thoại không hợp lệ')
    }
    else if(!isValidDateString(day,month,year)) {
      alert('Ngày sinh không hợp lệ')
    }
    else {
      axios.post('http://localhost:8800/add-ctdv', {
        MaNguoiDung: MaNguoiDung,
        MaVe: MaVe,
        TenDayDu: fullName,
        SDT: phone,
        QuocTich: qt,
        MaHoChieu: hc,
        NgaySinh: birth,
        NgayMua: paydate,
        TinhTrang: 'BT'
      }).then(res => {
        if(res.data.Status === 'Error') {
          alert('Lỗi: ', res.data.Error)
        }
        else {
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
        }
      })
    }
    
  };

  return (
    <div className="invoice-container">
      {/* Cột 1: Thông tin khách hàng và bảng hóa đơn */}
      <div className="left-column">
        {/* Thông tin khách hàng */}
        <div className="customer-info">
          <h2>Thông tin khách hàng</h2>
          <p><strong>Họ và tên:</strong> &nbsp;
            <input type="text" onChange={(e) => {
              setFullName(e.target.value)
            }}/>
          </p>
          <p><strong>Số điện thoại:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              setPhone(e.target.value)
            }}/>
          </p>
          <p><strong>Quốc tịch:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              setQT(e.target.value)
            }}/>
          </p>
          <p><strong>Hộ chiếu:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              setHC(e.target.value)
            }}/><br></br>
            <i>Lưu ý: đi trong nước thì hộ chiếu chính là CCCD</i>
          </p>
          <p><strong>Ngày sinh:</strong>&nbsp;
            <input type="number" id="quantity" name="quantity" min="1" max="31" onChange={(e) => {
              setDay(e.target.value)
            }}></input>
            <input type="number" id="quantity" name="quantity" min="1" max="12" onChange={(e) => {
              setMonth(e.target.value)
            }}></input>
            <input type="number" id="quantity" name="quantity" min="1" max="9999" onChange={(e) => {
              setYear(e.target.value)
            }}></input>
          </p>
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
              <tr>
                <td>{TenDiemDen === null ? '' : TenDiemDen}</td>
                <td>{Gia === null ? '' : Gia}</td> {/* Format price to VND */}
                <td>{MaGhe === null ? '' : MaGhe}</td>
                <td>{TenLoaiGhe === null ? '' : TenLoaiGhe}</td>
              </tr>
            </tbody>
          </table>

          {/* Tổng giá trị hóa đơn */}
          <h3 className="total">Tổng: {Gia === null ? 0 : Gia} ₫</h3>
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
