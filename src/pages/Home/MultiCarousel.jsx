
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
import { NavLink } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    name: 'Johnathan',
    img: pic1,
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi optio expedita provident placeat animi accusamus natus debitis, eum explicabo facilis suscipit beatae! Id quos omnis deserunt qui minus itaque."
  },
  {
    name: 'Jacob',
    img: pic2,
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi optio expedita provident placeat animi accusamus natus debitis, eum explicabo facilis suscipit beatae! Id quos omnis deserunt qui minus itaque."
  },
  {
    name: 'Laura',
    img: pic3,
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi optio expedita provident placeat animi accusamus natus debitis, eum explicabo facilis suscipit beatae! Id quos omnis deserunt qui minus itaque."
  },
  {
    name: 'Henry',
    img: pic4,
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi optio expedita provident placeat animi accusamus natus debitis, eum explicabo facilis suscipit beatae! Id quos omnis deserunt qui minus itaque."
  },
  {
    name: 'Ragile',
    img: pic5,
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eligendi optio expedita provident placeat animi accusamus natus debitis, eum explicabo facilis suscipit beatae! Id quos omnis deserunt qui minus itaque."
  },
]

const CARDNAME = ['Đà Nẵng', 'Đà Lạt', 'Hà Nội', 'TP HCM', 'Nha Trang']

const destination = ['Đà Nẵng', 'Đà Lạt', 'Hà Nội', 'TP HCM', 'Nha Trang']

const MultiCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const [selected, setSelected] = useState(1)
  return (
    <>
      <div style={{width: '75%', margin: '30px auto'}}>
        {destination.map((item, index) => (
          <button className='select-btn' onClick={() => setSelected(index + 1)}>{item}</button>
        ))}
      </div>
      <div style={{width: '75%', margin: 'auto'}}>
        <Slider {...settings}>
          {data.map((d) => (
            <Card style={{ width: '18rem'}}>
              <Card.Img variant="top" src={pic1}/>
              <Card.Body>
                <Card.Title>{CARDNAME[selected - 1]}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </div>
  
      <div style={{width: '75%', margin: '30px auto', textAlign: 'center'}}>
        <button className='booking-btn'>
          <NavLink to={'/hotel'} className='booking-btn-text' style={{textDecoration: 'none'}}>
            Đặt vé máy bay ngay 
            <FaArrowRight style={{marginLeft: '10px'}}/>
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default MultiCarousel