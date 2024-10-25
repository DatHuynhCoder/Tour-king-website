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

const Multi_Carousel = () => {
  const settings = {
    dots: true,
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
  return (
    <div style={{width: '75%', margin: 'auto'}}>
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
    </div>
  )
}

export default Multi_Carousel