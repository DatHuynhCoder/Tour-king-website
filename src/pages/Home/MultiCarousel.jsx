
/**
 * @author Quynh Anh
 * @documentation https://react-slick.neostack.com/docs/get-started
 */

import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import './MultiCarousel.scss'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

import axios from 'axios'

import DaNang from '../../assets/danang.jpg'
import TpHCM from '../../assets/tphcm.png'
import CanTho from '../../assets/cantho.jpg'
import Hanoi from '../../assets/hanoi.jpg'
import ThuaThienHue from '../../assets/thuathienhue.jpg'
import NotFound from '../../assets/notfound.jpg'


const destination = ['Đà Nẵng', 'Cần Thơ', 'Hà Nội', 'Hồ Chí Minh', 'Thừa Thiên Huế']
const illustrate = {
  'Đà Nẵng': require('../../assets/danang.jpg'),
  'Cần Thơ': require('../../assets/cantho.jpg'), 
  'Hà Nội': require('../../assets/hanoi.jpg'), 
  'Hồ Chí Minh': require('../../assets/tphcm.png'), 
  'Thừa Thiên Huế': require('../../assets/thuathienhue.jpg')
}
const MultiCarousel = ({Airline}) => {
  const [selectedAirline, setSelectedAirline] = useState()

  const navigate = useNavigate()
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const [selected, setSelected] = useState([])
  const handleChangeDesination = (destinationName) => {
    axios.get('http://localhost:8800/get-flight-by-airline?destination=' + destinationName + '&airline=' + Airline).then(res => {
      setSelected(res.data)
    })
  }
  useEffect(() => {
    handleChangeDesination('Hồ Chí Minh')
  },[] )
  return (
    <>
      <div style={{width: '75%', margin: '30px auto'}}>
        {destination.map((item, index) => (
          <button className='select-btn' onClick={() => {
            handleChangeDesination(item)
          }}>{item}</button>
        ))}
      </div>
      <div style={{width: '75%', margin: 'auto'}}>
        <Slider {...settings}>
          {selected.length > 0 ? selected.map((item) => (
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={illustrate[selected[0].TenDiaDiem]}/>
              <Card.Body>
                <Card.Title>
                  <span style={{textShadow: '1px 1px'}}>
                    {item.TenDiaDiem}
                  </span>
                </Card.Title>
                <Card.Text>
                  <b>Hãng:</b> {item.TenHang}<br></br>
                  <b>Điểm đến:</b> {item.TenSanBay}<br></br>
                  <b>Ngày cất cánh:</b> {item.NgayCatCanh.slice(0, 10)}<br></br>
                  <b>Giờ cất cánh:</b> {item.GioCatCanh.slice(0, 5)}
                </Card.Text>
                <Button variant="outline-primary" onClick={() => {
                  navigate(`/flight?hang=${item.MaHang}&tu=${item.MaDiemXuatPhat}&den=${item.MaDiemDen}`, {
                    state: {
                      hang: item.MaHang,
                      tu: item.MaDiemXuatPhat,
                      den: item.MaDiemDen
                    }
                  })
                }}>Đặt ngay</Button>
              </Card.Body>
            </Card>
          )) 
          : 
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={NotFound}/>
            <Card.Body>
              <Card.Title>Loading ...</Card.Title>
              <Card.Text>
                <b>Hãng:</b> Loading ...<br></br>
                <b>Điểm đến:</b> Loading ...<br></br>
                <b>Ngày cất cánh:</b> Loading ...<br></br>
                <b>Giờ cất cánh:</b> Loading ...
              </Card.Text>
              <Button variant="outline-primary" onClick={() => {
                console.log('nothing here')
              }}>Đặt ngay</Button>
            </Card.Body>
          </Card>
          }
        </Slider>
      </div>
  
      <div style={{width: '75%', margin: '30px auto', textAlign: 'center'}}>
        <button className='booking-btn' onClick={() => {
          navigate('/flight')
        }}>
          Đặt vé máy bay ngay 
          <FaArrowRight className="booking-btn-arrow"style={{marginLeft: '10px'}}/>
        </button>
      </div>
    </>
  )
}

export default MultiCarousel