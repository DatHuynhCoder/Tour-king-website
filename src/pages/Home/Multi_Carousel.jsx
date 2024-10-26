/**
 * @author Quynh Anh
 * @documentation https://react-slick.neostack.com/docs/get-started
 */

import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import './Multi_Carousel.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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

const CARDNAME = ['Việt Nam', 'Thái Lan', 'Singapore', 'Malaysia', 'Hàn Quốc']

const Multi_Carousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };
  const [selected, setSelected] = useState(1)
  return (
    <>
    <div style={{width: '75%', margin: '30px auto'}}>
      <button className='select-btn' onClick={() => setSelected(1)}>Việt Nam</button>
      <button className='select-btn' onClick={() => setSelected(2)}>Thái Lan</button>
      <button className='select-btn' onClick={() => setSelected(3)}>Singapore</button>
      <button className='select-btn' onClick={() => setSelected(4)}>Malaysia</button>
      <button className='select-btn' onClick={() => setSelected(5)}>Hàn Quốc</button>
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
        <NavLink to={'/hotel'} className='booking-btn-text' style={{textDecoration: 'none'}}>Đặt vé máy bay ngay</NavLink>
      </button>
    </div>

    {/* <div style={{width: '75%', margin: 'auto'}}>
      <div style={{marginTop: '20px'}}>
        <Slider {...settings}>
          {data.map((d) => (
            <div style={{backgroundColor: 'purple', height: '450px', color: 'black', borderRadius: '10px'}}>
              <div style={{height: '180px', backgroundColor: '#00bfff', display: 'flex', justifyContent:'center', alignItems: 'center',borderRadius: '10px 10px 0px 0px'}}>
                <img src={d.img} alt="" style={{height: '144px', width: '144px', borderRadius: '50%'}}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4px', margin: '4px'}}>
                <p style={{fontSize: '25px', fontWeight: 'bold'}}>{d.name}</p>
                <p>{d.review}</p>
                <button style={{color: 'white', backgroundColor: '#00bfff', paddingTop: '4px',paddingBottom: '4px', paddingLeft: '6px', paddingRight :'6px', borderRadius: '10px'}}>Read more</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div> */}
    </>
  )
}

export default Multi_Carousel