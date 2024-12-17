import React, { useState, useEffect } from 'react';
import './CustomerInfo.scss';
import { Button, Modal} from 'react-bootstrap';
import { IoTrashBin } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import QuickPick from '../../assets/quickpick.png';
import { toast } from 'react-toastify';


const CustomerInfo = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userPhone, setUserPhone] = useState();
  const [userNation, setUserNation] = useState();
  const [userBirthday, setUserBirthday] = useState();
  const [userPassPort, setUserPassPort] = useState();
  const [showModal, setShowModal] = useState(false);
  const [listCustomer, setListCustomer] = useState([]);

  //close modal
  const handleCloseModal = () => setShowModal(false);

  const handleAddCustomer = () => {
    const nextId = parseInt(localStorage.getItem('nextId'), 10);
    const customerData = {
      id: nextId,
      TenDayDu: userFullName,
      SDT: userPhone,
      QuocTich: userNation,
      NgaySinh: userBirthday,
      MaHoChieu: userPassPort
    }
    const updateListCustomer = [...listCustomer, customerData];
    setListCustomer(updateListCustomer);
    localStorage.setItem('customer', JSON.stringify(updateListCustomer));
    localStorage.setItem('nextId', nextId + 1);
    toast.success('Thêm danh sách khách hàng thành công !');
    setShowModal(false);
  }

  const handleDeleteCustomer = (customerId) => {
    const updatedListCustomer = listCustomer.filter((customer) => customer.id !== customerId);
    setListCustomer(updatedListCustomer);
    localStorage.setItem('customer', JSON.stringify(updatedListCustomer));

    console.log('Customer deleted, updated list:', updatedListCustomer);
  };

  useEffect(() => {
    const storedCustomers = localStorage.getItem('customer');
    const nextId = localStorage.getItem('nextId') || 1;

    if (storedCustomers) {
      setListCustomer(JSON.parse(storedCustomers));
    } else {
      localStorage.setItem('customer', JSON.stringify([]));
    }
    localStorage.setItem('nextId', nextId);
  }, []);

  return (
    <div className="customer-info-content" >
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
              <label className="form-label">Ngày sinh</label>
              <input
                type="text"
                className="form-control"
                value={userBirthday}
                onChange={(e) => setUserBirthday(e.target.value)}
              />
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Đóng
          </Button>
          <Button variant="success" onClick={() => handleAddCustomer()}>
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>

      {listCustomer.length === 0
        ? <div className='empty-customer-container'>
          <h3>Thông tin khách hàng đã lưu</h3>
          <img src={QuickPick} style={{height: '200px', width: 'auto'}} alt="list empty" />
          <p style={{textAlign: 'center'}}>Lưu ngay thông tin khách, chọn nhanh trong danh sách. Passenger Quick Pick giúp bạn không còn phiền não mỗi lần đặt chỗ.</p>
        </div>
        : listCustomer.map((item, index) => (
          <div key={index} className='customer-info-box'>
            <div>
              <div className='text-info-type'>Họ và tên:</div>
              <div>{item.TenDayDu}</div>
              <div className='text-info-type'>SDT:</div>
              <div>{item.SDT}</div>
            </div>
            <div>
              <div className='text-info-type'>Quốc tịch:</div>
              <div>{item.QuocTich}</div>
              <div className='text-info-type'>Ngày sinh:</div>
              <div>{item.NgaySinh}</div>
              <div className='text-info-type'>Hộ chiếu:</div>
              <div>{item.MaHoChieu}</div>
            </div>
            <div style={{ alignSelf: 'center' }}>
              <Button
                variant='danger'
                onClick={() => handleDeleteCustomer(item.id)}
              ><IoTrashBin size={30} /> Hủy</Button>
            </div>
          </div>
        ))}

      <Button
        variant='success'
        style={{ width: 'auto', alignSelf: 'center' }}
        onClick={() => setShowModal(true)}
      ><FaCirclePlus size={30} />  Thêm</Button>
    </div>
  );
};

export default CustomerInfo;
