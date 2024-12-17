import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Button,Modal } from 'react-bootstrap';
import './Payment.scss';
import axios from 'axios'

const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
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

  const [autoFillData, setAutoFillData] = useState({
    TenDayDu: '',
    SDT: '',
    QuocTich: '',
    HoChieu: '',
    NgaySinh: 1,
    ThangSinh : 1,
    NamSinh: 1
  })
  const [userInfo, setUserInfo] = useState({})
  const [listLocalInfo, setListLocalInfo] = useState([])
  const [show, setShow] = useState(false)
  
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

  useEffect(() => {
    const storedCustomers = localStorage.getItem('customer');
    console.log('check storedCustomers: ', JSON.parse(storedCustomers))

    if (storedCustomers) {
      // setListCustomer(JSON.parse(storedCustomers));
      setListLocalInfo(JSON.parse(storedCustomers))
    }
    if(MaNguoiDung) {
      axios.get(`http://localhost:8800/get-user-by-id?userid=${MaNguoiDung}`).then(res => {
        console.log('check user info in payment: ', res.data)
        setUserInfo(res.data[0])
      })
    }
    console.log('check list local info: ', listLocalInfo)
  }, [])

  const handlePayment = () => {
    console.log('check userInfo after click pay: ', userInfo)
    const birth = `${year}-${month}-${day}`
    const date = new Date();
    const curr_day = date.getDate();
    const curr_month = date.getMonth() + 1;
    const curr_year = date.getFullYear();
    const paydate = `${curr_year}-${curr_month}-${curr_day}`;
    if(!isAllNumbers(userInfo.SDT)) {
      alert('Số điện thoại không hợp lệ')
    }
    else if(!isAllNumbers(userInfo.MaHoChieu)) {
      alert('Mã hộ chiếu không hợp lệ')
    }
    else if(!isValidDateString(day,month,year)) {
      alert('Ngày sinh không hợp lệ')
    }
    else {
      axios.post('http://localhost:8800/add-ctdv', {
        MaNguoiDung: MaNguoiDung,
        MaVe: MaVe,
        TenDayDu: userInfo.TenDayDu,
        SDT: userInfo.SDT,
        QuocTich: userInfo.QuocTich,
        MaHoChieu: userInfo.MaHoChieu,
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
          navigate(-1)
        }
      })
    }
    
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (flight_info) => {
    // console.log('check flight info: ', flight_info)
    // console.log(flight_info.MaChuyenBay, flight_info.MaLoaiGhe)
    // setFlightInfo(flight_info) // lưu lại thông tin chuyến bay được chọn
    // try {
    //   axios.get(`http://localhost:8800/get-all-tickets-by-MCB-and-MLG?machuyenbay=${flight_info.MaChuyenBay}&maloaighe=${flight_info.MaLoaiGhe}`).then(res => {
    //     console.log(res.data)
    //     setListTickets(res.data)
    //   })
    // } catch(error) {
    //   console.log('Lỗi: ', error)
    // }
    setShow(true)
  };
  const handleChangeUserInfo = (info) => {
    setUserInfo({
      ...userInfo,
      MaHoChieu: info.MaHoChieu,
      NgaySinh: info.NgaySinh,
      QuocTich: info.QuocTich,
      SDT: info.SDT,
      TenDayDu: info.TenDayDu,
    })
  }
  return (
    <>
    <Modal
      show={show}
      onHide={handleClose}
      backdrop='static'
    >
      <Modal.Header closeButton>
        <Modal.Title>Danh sách thông tin có sẵn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          listLocalInfo.length > 0 ? listLocalInfo.map((info) => {
            return <div style={{border: '1px solid black', boxShadow: '3px 3px', marginBottom: 5, display: 'flex'}}>
              <div style={{flex: 3}}>
                <b>Tên đầy đủ:</b> {info.TenDayDu} <br></br>
                <b>Ngày sinh:</b> {info.NgaySinh}<br></br>
                <b>Số điện thoại:</b> {info.SDT}<br></br>
                <b>Quốc tịch:</b> {info.QuocTich}<br></br>
                <b>Mã hộ chiếu:</b> {info.MaHoChieu}
              </div>
              <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button variant='outline-success'
                  onClick={() => {
                    handleChangeUserInfo(info)
                    handleClose()
                  }}
                >Chọn</Button>
              </div>
            </div>
          })
          :
          <div>Nothing</div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
    <div className="invoice-container">
      {/* Cột 1: Thông tin khách hàng và bảng hóa đơn */}
      <div className="left-column">
        {/* Thông tin khách hàng */}
        <div className="customer-info">
          <h2>Thông tin khách hàng</h2>
          <p><strong>Họ và tên:</strong> &nbsp;
            <input type="text" onChange={(e) => {
              // setFullName(e.target.value)
              setUserInfo({
                ...userInfo,
                TenDayDu: e.target.value
              })
            }} value={userInfo.TenDayDu}/>
          </p>
          <p><strong>Số điện thoại:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              // setPhone(e.target.value)
              setUserInfo({
                ...userInfo,
                SDT: e.target.value
              })
            }} value={userInfo.SDT}/>
          </p>
          <p><strong>Quốc tịch:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              // setQT(e.target.value)
              setUserInfo({
                ...userInfo,
                QuocTich: e.target.value
              })
            }} value={userInfo.QuocTich}/>
          </p>
          <p><strong>Hộ chiếu:</strong>&nbsp;
            <input type="text" onChange={(e) => {
              // setHC(e.target.value)
              setUserInfo({
                ...userInfo,
                MaHoChieu: e.target.value
              })
            }} value={userInfo.MaHoChieu}/><br></br>
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
          <Button variant='outline-primary'
            onClick={() => {
              handleShow()
            }}
          >Chọn thông tin đã lưu</Button>
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
    </>
  );
};

export default PaymentPage;
