import React, { useState, useContext, useEffect } from 'react';
import './BookingHistory.scss';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaListAlt, FaMoneyBillAlt } from 'react-icons/fa';
import { ContextStore } from '../../context/Context';
import axios from 'axios';
import { PiAirplaneTiltFill } from "react-icons/pi";
import { Button } from 'react-bootstrap';

const BookingHistory = () => {
  const {
    accessToken, setAccessToken,
    refreshToken, setRefreshToken,
    userid, setUserid,
    name, setName,
    isAdmin, setIsAdmin,
    useravatarurl, setUseravatarurl
  } = useContext(ContextStore);
  //getlistdata
  const [listVeDat, setListveDat] = useState([]);

  //get list chi tiet dat ve
  const getlistDatVe = async () => {
    try {
      const respone = await axios.get('http://localhost:8800/get-chititetdatve-by-user-id', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: { userid: userid }
      });
      console.log("Get user by id = ", userid, ": ", respone.data);
      if (respone.data && respone.data.length > 0) {
        setListveDat(respone.data);
      }
      console.log(respone.data);
    } catch (error) {
      console.log('Error fetching get list chi tiet dat ve', error);
    }
  }

  const handleHoanTra = (id_ctdv) => {
    if (accessToken) {
      const changeTrangThaiCTDV = async () => {
        try {
          const info = { ID_ChitietDatVe: id_ctdv }
          const respone = await axios.put('http://localhost:8800/update-chitietdatve-to-CXL', info);
          console.log(respone.data);
        } catch (error) {
          console.log("Can't update trang thai")
        }
      }
      changeTrangThaiCTDV();
      getlistDatVe();
    }
  }

  //format date
  const formatDateToDMY = (dateString) => {
    const date = new Date(dateString);
    // Kiểm tra xem chuỗi có hợp lệ không
    if (isNaN(date)) {
      throw new Error("Invalid date string");
    }

    // Lấy ngày, tháng, năm và định dạng lại
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  //use axios to request get-chititetdatve-by-user-id
  useEffect(() => {
    if (accessToken && userid) {
      getlistDatVe();
    }
  }, [accessToken, userid])

  return (
    <div className="booking-history-container">
      {/* Current Bookings */}
      <div className="box">
        <h2 className="section-title">Vé điện tử & phiếu thanh toán hiện hành</h2>
        <div className="current-bookings">
          {listVeDat.map((item, index) => (
            <div
              key={index}
              className='booking-item'
            >
              <div className="booking-name">Mã đặt chỗ: <span style={{ fontWeight: 'bold' }}>{item.ID_ChitietDatVe}</span></div>
              <div className="booking-info">
                <div className="vertical-line-container">
                  <div className="circle"></div>
                  <div className="line"></div>
                  <div className="circle"></div>
                </div>

                <div className='booking-info-box1'>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{item.GioCatCanh}</div>
                    <div>{item.NgayCatCanh}</div>
                    <div>{item.SBXP}</div>
                  </div>
                  <div>
                    <PiAirplaneTiltFill size={30} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{item.GioDen}</div>
                    <div>{item.NgayDen}</div>
                    <div>{item.SBD}</div>
                  </div>
                </div>

                <div className='booking-info-box2'>
                  <div className="user-type-info">Họ và tên:</div>
                  <div>{item.TenDayDu}</div>
                  <div className="user-type-info">Số điện thoại:</div>
                  <div>{item.SDT}</div>
                  <div className="user-type-info">Mã hộ chiếu:</div>
                  <div>{item.MaHoChieu}</div>
                  <div className="user-type-info">Ngày sinh:</div>
                  <div>{formatDateToDMY(item.NgaySinh)}</div>
                </div>
                <div className='booking-info-box3'>
                  <div className={`${item.TenLoaiGhe === "Thương gia" ? "thuonggia" : "phothong"}`}>{item.TenLoaiGhe}</div>
                  <div className='user-type-info'>Ngày mua vé:</div>
                  <div>{formatDateToDMY(item.NgayMua)}</div>
                  <div className='price-box'>{item.Gia} VND</div>
                  {item.TinhTrang === "BT" &&
                    <>
                      <div style={{ color: 'green', fontWeight: '600' }}>Đặt chỗ thành công ✔️</div>
                      <Button
                        onClick={() => handleHoanTra(item.ID_ChitietDatVe)}
                        variant='outline-warning'
                      >Hoàn trả</Button>
                    </>
                  }

                  {item.TinhTrang === "CXL" &&
                    <div style={{ color: 'blue', fontWeight: '600' }}>Đang xử lý hoàn trả..⌛</div>
                  }

                  {item.TinhTrang === "DH" &&
                    <div style={{ color: 'red', fontWeight: '600' }}>Đặt chỗ đã bị hủy ❌</div>
                  }
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default BookingHistory;
