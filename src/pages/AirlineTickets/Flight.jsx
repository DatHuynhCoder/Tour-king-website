/**
 * @author Tan Dat
 */

import React from 'react'
import FlightSearchBar from './FlightSearchBar'
import Ticket from './Ticket'
import FlightAchievements from './FlightAchievements'
//scss
import './Flight.scss'

const rawdata = [
  {
    veid: 1,
    tenchuyenbay: 'VietnamAirlines VN 7258',
    giodi: '7:00',
    noidi: 'TP.HCM',
    sanbaydi: 'Sân bay quốc tế Tân Sơn Nhất',
    gioden: '10:00',
    noiden: 'Hà Nội',
    thoigianbay: '3:00',
    sanbaiden: 'Sân bay quốc tế Nội Bài',
    tenmaybay: 'Máy bay Airbus A321',
    hlkg: 30,
    hlxt: 7
  },
  {
    veid: 2,
    tenchuyenbay: 'VietnamAirlines VN 7345',
    giodi: '8:00',
    noidi: 'TP.HCM',
    sanbaydi: 'Sân bay quốc tế Tân Sơn Nhất',
    gioden: '11:30',
    noiden: 'Đà Nẵng',
    thoigianbay: '3:30',
    sanbaiden: 'Sân bay quốc tế Đà Nẵng',
    tenmaybay: 'Máy bay Boeing 737',
    hlkg: 25,
    hlxt: 5
  },
  {
    veid: 3,
    tenchuyenbay: 'Vietjet Air VJ 381',
    giodi: '9:00',
    noidi: 'Hà Nội',
    sanbaydi: 'Sân bay quốc tế Nội Bài',
    gioden: '12:00',
    noiden: 'TP.HCM',
    thoigianbay: '3:00',
    sanbaiden: 'Sân bay quốc tế Tân Sơn Nhất',
    tenmaybay: 'Máy bay Airbus A320',
    hlkg: 40,
    hlxt: 8
  },
  {
    veid: 4,
    tenchuyenbay: 'Vietjet Air VJ 257',
    giodi: '10:00',
    noidi: 'Hà Nội',
    sanbaydi: 'Sân bay quốc tế Nội Bài',
    gioden: '13:30',
    noiden: 'Nha Trang',
    thoigianbay: '3:30',
    sanbaiden: 'Sân bay quốc tế Cam Ranh',
    tenmaybay: 'Máy bay Airbus A321',
    hlkg: 35,
    hlxt: 9
  },
  {
    veid: 5,
    tenchuyenbay: 'Bamboo Airways QH 8235',
    giodi: '14:00',
    noidi: 'TP.HCM',
    sanbaydi: 'Sân bay quốc tế Tân Sơn Nhất',
    gioden: '17:00',
    noiden: 'Vinh',
    thoigianbay: '3:00',
    sanbaiden: 'Sân bay quốc tế Vinh',
    tenmaybay: 'Máy bay Embraer E190',
    hlkg: 20,
    hlxt: 6
  }
];

const Flight = () => {
  return (
    <div className='flight-container'>
      <FlightSearchBar />
      <div className="ticket-result-container">
        <h2 className="result-title">Kết quả tìm kiếm chuyến bay</h2>
        {rawdata.map((ticket_item, index) => (
          <Ticket key={index} ticket_item={ticket_item}/>
        ))}
      </div>
      <FlightAchievements />
    </div>
  )
}

export default Flight