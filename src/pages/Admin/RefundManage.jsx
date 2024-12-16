import React, { useEffect, useState } from 'react'
import DefaultAvatar from '../../assets/defaultAvatar.png'

import Button from 'react-bootstrap/Button'
import { RiUserForbidFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import Table from 'react-bootstrap/Table'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { IoSearch } from "react-icons/io5";

import axios from 'axios'

const RefundManage = () => {
  const [listCTDV, setListCTDV] = useState([])
  const [search, setSearch] = useState('')
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:8800/get-all-ctdv-with-condition`).then(res => {
      console.log('check all CTDV: ', res.data)
      setListCTDV(res.data)
    })
  }, [rerender])
  const handleBanAndUnBanUser = (MaNguoiDung, BiCam) => {
    // ban
    axios.post('http://localhost:8800/ban-user-by-id', {
      MaNguoiDung: MaNguoiDung,
      BiCam: BiCam
    }).then(res => {
      if(res.data.Status === 'Success') {
        if(BiCam === 1)
          alert('Cấm người dùng thành công !')
        else 
          alert('Gỡ cấm người dùng thành công !')
        setRerender(!rerender)
      }
      else {
        alert('Cấm người dùng không thành công !')
      }
    })
  }
  const filteredData = listCTDV.filter(item => {
    const searchLower = search.toLowerCase(); // Chuyển text nhập thành chữ thường
    return (
      (item.TenDayDu && item.TenDayDu.toLowerCase().includes(searchLower)) ||
      (item.ID_ChitietDatVe && JSON.stringify(item.MaNguoiDung).toLowerCase().includes(searchLower)) ||
      (item.Email && item.Email.toLowerCase().includes(searchLower)) ||
      (item.SDT && item.SDT.toLowerCase().includes(searchLower))
    );
  });
  const handleAcceptOrRefuse = (ID_ChitietDatVe, TinhTrang) => {
    axios.post('http://localhost:8800/update-ctdv', {
      ID_ChitietDatVe,
      TinhTrang
    }).then(res => {
      if(res.data.Status === 'Success') {
        alert('Thành công !')
        setRerender(!rerender)
      }
      else {
        alert('Thất bại')
      }
    })
  }
  return (
    <>
    <div>
      <h1>QUẢN LÝ ĐẶT VÉ</h1>
      <br/>
      <div className = "custome-search-NguoiDung">
        <InputGroup className="mb-3 searching-bar">
          <Form.Control
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={() => {
            
          }}>
            <IoSearch size={25} />
          </Button>
        </InputGroup>
      </div>
      <br/>
      <Table striped bordered hover>
        <tr>
          <th>ID</th>
          <th>Tên người dùng</th>
          <th>SDT</th>
          <th>Quốc tịch</th>
          <th>Mã hộ chiếu</th>
          <th>Ngày mua</th>
          <th>Tình trạng</th>
          <th>Thao tác</th>
        </tr>
          {filteredData.map((ticket) => {
            return (
              <tr>
                <td>{ticket.ID_ChitietDatVe}</td>
                <td>{ticket.TenDayDu}</td>
                <td>{ticket.SDT}</td>
                <td>{ticket.QuocTich}</td>
                <td>{ticket.MaHoChieu}</td>
                <td>{ticket.NgayMua.slice(0, 10)}</td>
                <td>{ticket.TinhTrang === 'DH' ? 'Đã hủy' : 'Chờ xử lí'}</td>
                <td style={{padding: 10}}>
                  {
                    ticket.TinhTrang === 'DH' ? 
                    <>
                      {/* <Button variant="outline-danger" id="button-addon2" 
                        onClick={() => {
                          handleDeleteCTDV(ticket.ID_ChitietDatVe)
                        }}> <FaUserCheck size={25} />Xóa</Button> */}
                    </> : 
                    <>
                      <Button variant="outline-success" id="button-addon2"
                        onClick={() => {
                          handleAcceptOrRefuse(ticket.ID_ChitietDatVe, 'DH')
                        }} style={{marginRight: 10}}> <RiUserForbidFill size={25} />Duyệt</Button>
                      <Button variant="outline-danger" id="button-addon2" 
                        onClick={() => {
                          handleAcceptOrRefuse(ticket.ID_ChitietDatVe, 'BT')
                        }}> <FaUserCheck size={25} />Từ chối</Button>
                    </>
                  }
                </td>
              </tr>
            )  
          })}
      </Table>
    </div>
        
    </>
  )
}
    
export default RefundManage;