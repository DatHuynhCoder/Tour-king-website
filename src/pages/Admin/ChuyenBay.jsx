import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'


import DefaultAvatar from '../../assets/defaultAvatar.png'

import Button from 'react-bootstrap/Button'
import { MdDelete } from "react-icons/md"
import { RiUserForbidFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import Table from 'react-bootstrap/Table'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { IoSearch } from "react-icons/io5";

import axios from 'axios'

const data = [
    {
        ID: '1',
        ten: 'darklord',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
        ten: 'darklord',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    },
    {
        ID: '1',
        ten: 'darklord',
        email: 'trum cua bong toi',
        sdt: 'ai goi la cho',
        loaiND: 'vip nhat o thung lung nay',
        isBan: 't la trum ai dam ban t',
    }
]

const ChuyenBay = () => {
  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState('')
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    axios.get(`http://localhost:8800/get-all-user`).then(res => {
      console.log('check all users: ', res.data)
      setAllUsers(res.data)
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
  const filteredData = allUsers.filter(item => {
    const searchLower = search.toLowerCase(); // Chuyển text nhập thành chữ thường
    return (
      (item.TenDayDu && item.TenDayDu.toLowerCase().includes(searchLower)) ||
      (item.MaNguoiDung && JSON.stringify(item.MaNguoiDung).toLowerCase().includes(searchLower)) ||
      (item.Email && item.Email.toLowerCase().includes(searchLower)) ||
      (item.SDT && item.SDT.toLowerCase().includes(searchLower))
    );
  });
  return (
    <>
    <div>
      <h1>QUẢN LÝ CHUYẾN BAY</h1>
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
      <div className = "custome-select-NguoiDung">
        <label for="select-NguoiDung-isBan">Bị Cấm: &nbsp;</label>
        <select className="select-NguoiDung-isBan" name="select-NguoiDung-isBan">
          <option value="searchsomething">vua chúa mà ai dám ban tao</option>
          <option value="searchsomething">vua chúa mà ai dám ban tao</option>
        </select>
      </div>
      <Table striped bordered hover>
        <tr>
          <th>ID</th>
          <th>Ảnh đại diện</th>
          <th>Tên người dùng</th>
          <th>Email</th>
          <th>SDT</th>
          {/* <th>Loại người dùng</th> */}
          <th>Ban</th>
          <th>Thao tác</th>
        </tr>
          {filteredData.filter((item) => item.Admin === 0).map((user) => {
            return (
              <tr>
                <td>{user.MaNguoiDung}</td>
                <td>
                  <img src={user.Avatar === '' ? DefaultAvatar : user.Avatar} alt="Avatar" style={{width: '50px', height: '50px', borderRadius: 25}}/>
                </td>
                <td>{user.TenDayDu}</td>
                <td>{user.Email}</td>
                <td>{user.SDT}</td>
                {/* <td>{d.loaiND}</td> */}
                <td>{user.BiCam === 1 ? 'Có' : 'Không'}</td>
                <td style={{padding: 10}}>
                  <Button variant="outline-danger" id="button-addon2" 
                    onClick={() => {
                      handleBanAndUnBanUser(user.MaNguoiDung, 1)
                    }} style={{marginRight: 10}}> <RiUserForbidFill size={25} /> Cấm</Button>
                  <Button variant="outline-success" id="button-addon2" 
                    onClick={() => {
                      handleBanAndUnBanUser(user.MaNguoiDung, 0)
                    }}> <FaUserCheck size={25} /> Gỡ Cấm</Button>
                </td>
              </tr>
            )  
          })}
      </Table>
    </div>
        
    </>
  )
}
    
export default ChuyenBay;
// const ChuyenBay = () => {
//     return (
//         <>
//         <div>
//             <h1>QUẢN LÝ CHUYẾN BAY</h1>
//             <br/>
//             <div className = "custome-search-ChuyenBay">
//                 <input type = "text" className = "search-ChuyenBay" placeholder="Search here" />
//                 <button className = "button-Search-ChuyenBay">
//                     <Image
//                         src={searchIcon}
//                         alt="chuyen bay icon"
//                         width={48}
//                         height={48}
//                         classNameName="icon"
//                     />
//                 </button>
//             </div>
//             <br/>
//             <div className = "custome-select-ChuyenBay">
//                 <label for="select-ChuyenBay-Hang"> Hãng: &nbsp;</label>
//                 <select className="select-Hang" name="select-Hang">
//                     <option value="searchsomething">công ty tao làm ra</option>
//                     <option value="searchsomething">công ty tao làm ra</option>
//                     <option value="searchsomething">công ty tao làm ra</option>
//                     <option value="searchsomething">công ty tao làm ra</option>
//                 </select>

//                 <label for="select-ChuyenBay-isBan">LoaiND: &nbsp;</label>
//                 <select className="select-ChuyenBay-isBan" name="select-ChuyenBay-isBan">
//                     <option value="searchsomething">vua chúa mà ai dám ban tao</option>
//                     <option value="searchsomething">vua chúa mà ai dám ban tao</option>
                    
//                 </select>

//             </div>
            
//             <table className = "bang-ChuyenBay">
//                 <tr className = "tr-ChuyenBay">
//                     <th className = "th-ChuyenBay">ID</th>
//                     <th className = "th-ChuyenBay">Hãng bay</th>
//                     <th className = "th-ChuyenBay">Số hiệu máy bay</th>
//                     <th className = "th-ChuyenBay">Điểm xuất phát </th>
//                     <th className = "th-ChuyenBay">Điểm đến </th>
//                     <th className = "th-ChuyenBay">Ngày cất cánh</th>
//                     <th className = "th-ChuyenBay">Giờ cất cánh</th>
//                     <th className = "th-ChuyenBay">Giờ đến dự kiến</th>
//                     <th className = "th-ChuyenBay">Bán hết</th>
//                     <th className = "th-ChuyenBay">Thao tac</th>
//                 </tr>
//                 {data.map((d) => {
//                     return (
//                         <tr className = "tr-ChuyenBay">
//                             <td className = "td-ChuyenBay">{d.ID}</td>
//                             <td className = "td-ChuyenBay">{d.hang}</td>
//                             <td className = "td-ChuyenBay">{d.sohieuMayBay}</td> 
//                             <td className = "td-ChuyenBay">{d.diemxp}</td>
//                             <td className = "td-ChuyenBay">{d.diemd}</td>
//                             <td className = "td-ChuyenBay">{d.ngayCatCanh}</td>
//                             <td className = "td-ChuyenBay">{d.gioCatCanh}</td>
//                             <td className = "td-ChuyenBay">{d.gioDenDuKien}</td>
//                             <td className = "td-ChuyenBay">{d.isSoldOut}</td>
//                             <td className = "td-ChuyenBay">
//                                 <button className ="Duyet-ChuyenBay">Đăng bán</button>
//                             </td>
//                         </tr>
//                     )  
//                 })}
//             </table>
//         </div>
            
//         </>
//     )
// }
    
// export default ChuyenBay;