import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa';
import DefaultAvatar from '../../assets/defaultAvatar.png'
import { ContextStore } from '../../context/Context';
import "./UserInfo.scss"
import { Card, Button, Image, Row, Col, Container, Modal } from 'react-bootstrap';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';

import axios from 'axios';

//Kiểm tra chuỗi có phải là số không
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

const UserInfo = () => {
  const {
    accessToken, setAccessToken,
    refreshToken, setRefreshToken,
    userid, setUserid,
    name, setName,
    isAdmin, setIsAdmin,
    useravatarurl, setUseravatarurl
  } = useContext(ContextStore);
  const navigate = useNavigate();

  // Tạo state cho các input
  const [userFullName, setUserFullName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNation, setUserNation] = useState('');
  const [dayBirth, setDayBirth] = useState('')
  const [monthBirth, setMonthBirth] = useState('')
  const [yearBirth, setYearBirth] = useState('')
  const [userPassPort, setUserPassPort] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState('');
  //get user data
  const [user, setUser] = useState([]);
  //close modal
  const handleCloseModal = () => setShowModal(false);

  //load image 
  const handleUploadAvatar = async (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await axios.post('http://localhost:8800/upload-avatar', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        setPreviewAvatar(URL.createObjectURL(file));
        setUseravatarurl(response.data.avatarUrl);
      } catch (error) {
        console.error('Error uploading avatar:', error);
        toast.error('Failed to upload avatar!');
      }
    }
  };

  //get user by id
  const getUserById = async () => {
    try {
      const response = await axios.get('http://localhost:8800/get-user-by-id', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: { userid: userid }
      });
      console.log("Get user by id = ", userid, ": ", response.data);
      if (response.data && response.data.length > 0) {
        setUser(response.data);
      }
    } catch (error) {
      console.log('Error fetching user by id:', error);
    }
  }

  //update User
  const handleUpdateUser = () => {
    console.log("update click")
    if (accessToken) {
      const userBirthday = `${yearBirth}-${monthBirth}-${dayBirth}`;
      if (!isAllNumbers(userPhone)) {
        toast.error('Số điện thoại không hợp lệ');
      }
      else if (!isAllNumbers(userPassPort)) {
        toast.error('Mã hộ chiếu không hợp lệ')
      }
      else if (!isValidDateString(dayBirth, monthBirth, yearBirth)) {
        toast.error('Ngày sinh không hợp lệ');
      }
      else {
        const changeUser = async () => {
          try {
            const info = {
              userid: userid,
              userFullname: userFullName,
              userPhone: userPhone,
              userNation: userNation,
              userBirthday: userBirthday,
              userPassPort: userPassPort,
              useravatarurl: useravatarurl
            }
            const respone = await axios.put('http://localhost:8800/update-user-info', info);
            console.log(respone.data);
            toast.success('Cập nhật thông tin người dùng thành công');
            setShowModal(false);
          } catch (error) {
            console.log("Can't update user:", error)
          }
        }
        changeUser();
        getUserById();
      }
    }
  }


  //update user for modal
  useEffect(() => {
    if (user.length > 0) {
      console.log(user[0].NgaySinh);
      const birthday = user[0].NgaySinh;
      const [year, month, day] = birthday.split('-');
      setName(user[0].TenDayDu);
      setUserFullName(user[0].TenDayDu);
      setUserPhone(user[0].SDT);
      setUserNation(user[0].QuocTich);
      setDayBirth(day);
      setMonthBirth(month);
      setYearBirth(year);
      setUserPassPort(user[0].MaHoChieu);
      setPreviewAvatar(useravatarurl);
    }
  }, [user]);

  //use axios to request get-user-by-id
  useEffect(() => {
    if (accessToken && userid) {
      getUserById();
    }
  }, [accessToken, userid])


  return (
    <div className="user-info-container">
      <Container className='user-sub-container'>
        <Modal show={showModal}
          onHide={handleCloseModal}
          size='xl'
          backdrop='static'
        >
          <Modal.Header closeButton>
            <Modal.Title>Thay đổi thông tin người dùng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  value={userFullName}
                  onChange={(e) => setUserFullName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Quốc tịch</label>
                <input
                  type="text"
                  className="form-control"
                  value={userNation}
                  onChange={(e) => setUserNation(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Ngày sinh (Ngày - Tháng - Năm)</label>
                <div className="row g-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ngày"
                      value={dayBirth}
                      onChange={(e) => setDayBirth(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tháng"
                      value={monthBirth}
                      onChange={(e) => setMonthBirth(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Năm"
                      value={yearBirth}
                      onChange={(e) => setYearBirth(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Mã hộ chiếu</label>
                <input
                  type="text"
                  className="form-control"
                  value={userPassPort}
                  onChange={(e) => setUserPassPort(e.target.value)}
                />
              </div>
              <div className="avatar-container">
                <label className='form-label label-upload' htmlFor='labelUpload'>
                  <FcPlus />
                  Upload ảnh đại diện</label>
                <input
                  type="file"
                  hidden
                  id='labelUpload'
                  onChange={(e) => handleUploadAvatar(e)}
                />
              </div>
              <div className='col-md-12 img-preview'>
                {previewAvatar ?
                  <img
                    src={previewAvatar}
                    alt="avatar"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                  :
                  <span>Preview Avatar</span>
                }
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Đóng
            </Button>
            <Button variant="primary" onClick={() => handleUpdateUser()}>
              Thay đổi
            </Button>
          </Modal.Footer>
        </Modal>

        <Card className="mb-3">
          <Card.Body>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Tên người dùng</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].TenDayDu : "Đang tải..."}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Email</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].Email : "Đang tải..."}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Số điện thoại</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].SDT : "Đang tải..."}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Quốc tịch</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].QuocTich : "Đang tải..."}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Ngày sinh</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].NgaySinh : "Đang tải..."}
              </Col>
            </Row>
            <Row className="mb-3">
              <Col sm={3}>
                <h6 className="mb-0 info-type">Mã hộ chiếu</h6>
              </Col>
              <Col sm={9} className="text-secondary">
                {user.length > 0 ? user[0].MaHoChieu : "Đang tải..."}
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Button
                  variant="success"
                  onClick={() => setShowModal(true)}
                >
                  Thay đổi
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UserInfo;
