
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
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

import axios from 'axios'

const destination = ['Đà Nẵng', 'Cần Thơ', 'Hà Nội', 'Hồ Chí Minh', 'Thừa Thiên Huế']

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
    console.log(destinationName)
    axios.get('http://localhost:8800/get-flight-by-airline?destination=' + destinationName + '&airline=' + Airline).then(res => {
      console.log('check data: ', res.data)
      setSelected(res.data)
    })
  }
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
              <Card.Img variant="top" src={pic1}/>
              <Card.Body>
                <Card.Title>{item.TenDiaDiem}</Card.Title>
                <Card.Text>
                  Hãng: {item.TenHang}<br></br>
                  Điểm đến: {item.TenSanBay}<br></br>
                  Ngày cất cánh: {item.NgayCatCanh.slice(0, 10)}<br></br>
                  Giờ cất cánh: {item.GioCatCanh.slice(0, 5)}
                </Card.Text>
                <Button variant="outline-primary" onClick={() => {
                  navigate('/flight', {
                    state: {
                      destination: '',
                    }
                  })
                }}>Đặt ngay</Button>
              </Card.Body>
            </Card>
          )) 
          : 
          <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={pic1}/>
            <Card.Body>
              <Card.Title>Loading ...</Card.Title>
              <Card.Text>
                Hãng: Loading ...<br></br>
                Điểm đến: Loading ...<br></br>
                Ngày cất cánh: Loading ...<br></br>
                Giờ cất cánh: Loading ...
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