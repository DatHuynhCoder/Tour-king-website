/**
 * @author Tan Dat
 */

import React, { useEffect, useState, useContext } from 'react'
import FlightSearchBar from './FlightSearchBar'
import Ticket from './Ticket'
import FlightAchievements from './FlightAchievements'
//use axios
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//scss
import './Flight.scss'

import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'
import { ContextStore } from '../../context/Context'

const Flight = () => {
  const {userid} = useContext(ContextStore)
  const [listFlights,setListFlights] = useState([]);
  //Chứa list chuyến bay search được
  const [listFlightsSearch,setListFlightsSearch] = useState([]);
  const [listTickets, setListTickets] = useState([])
  const [flightInfo, setFlightInfo] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  const [show, setShow] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const hang = searchParams.get('hang')
  const tu = searchParams.get('tu')
  const den = searchParams.get('den')
  const loca_hang = location?.state?.hang ?? null
  const loca_tu = location?.state?.tu ?? null
  const loca_den = location?.state?.den ?? null
  useEffect(()=> {
    if(hang === null || tu === null || den === null) {
      console.log('Bấm vô Đặt vé trên header')  
    }
    else console.log('Bấm vô đặt ngay bên home: ', hang, tu, den)
    console.log('check location: ', loca_hang, loca_tu, loca_den)
    const getFlights = async () => {
      if(loca_hang === null || loca_tu === null || loca_den === null)
        try {
          const response = await axios.get('http://localhost:8800/get-all-flight');
          console.log('check ticket data: ', response.data);
          setListFlights(response.data);
          setListFlightsSearch(response.data);
        }
        catch (error) {
          console.log('Co loi trong qua trinh lay tickets: ', error);
        }
      else
        try {
          const response = await axios.get(`http://localhost:8800/get-all-flight-with-condition?mahang=${loca_hang}&madiemxp=${loca_tu}&madiemden=${loca_den}`);
          console.log('check ticket data: ', response.data);
          setListFlights(response.data);
          setListFlightsSearch(response.data);
        }
        catch (error) {
          console.log('Co loi trong qua trinh lay tickets: ', error);
        }
    };
    getFlights();
    console.log("Check data lise ve: ", listFlights)
  },[])
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (flight_info) => {
    console.log('check flight info: ', flight_info)
    console.log(flight_info.MaChuyenBay, flight_info.MaLoaiGhe)
    setFlightInfo(flight_info) // lưu lại thông tin chuyến bay được chọn
    try {
      axios.get(`http://localhost:8800/get-all-tickets-by-MCB-and-MLG?machuyenbay=${flight_info.MaChuyenBay}&maloaighe=${flight_info.MaLoaiGhe}`).then(res => {
        console.log(res.data)
        setListTickets(res.data)
      })
    } catch(error) {
      console.log('Lỗi: ', error)
    }
    setShow(true)
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
      >
        <Modal.Header closeButton>
          <Modal.Title>Danh sách vé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            listTickets.map((ticket) => {
              return <div style={{
                border: '1px solid black', 
                display: 'flex', 
                width: '100%', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: '10px',
                borderRadius: 10,
                marginTop: 10
              }}>
                <div style={{flex: 3}}>
                  Mã ghế: {ticket.MaGhe} <br></br>
                  Giá: {ticket.Gia}
                </div>
                <div style={{flex: 1}}>
                  <Button variant="outline-primary" onClick={() => {
                    navigate('/payment', {
                      state: {
                        MaVe: ticket.MaVe,
                        MaNguoiDung: userid,
                        TenDiemDen: flightInfo.tenddden,
                        Gia: ticket.Gia,
                        MaGhe: ticket.MaGhe,
                        TenLoaiGhe: flightInfo.TenLoaiGhe
                      }
                    })
                  }}>
                    Đặt ngay
                  </Button>
                </div>
              </div>
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          {/* <Button variant="primary" onClick={() => console.log('do something')}>
            Đặt
          </Button> */}
        </Modal.Footer>
      </Modal>
      <div className='flight-container'>
        <FlightSearchBar listFlights={listFlights} setListFlightsSearch={setListFlightsSearch} />
        <div className="ticket-result-container">
          <h2 className="result-title">Kết quả tìm kiếm chuyến bay</h2>
          {listFlightsSearch.length > 0 ? listFlightsSearch.map((ticket_item, index) => (
            <Ticket key={index} ticket_item={ticket_item} handleShow={handleShow}/>
          ))
          :
          <div>Not found</div>
        }
        </div>
        <FlightAchievements />
      </div>
    </>
  )
}

export default Flight