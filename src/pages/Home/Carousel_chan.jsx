/**
 * @author Quynh Anh
 */

import Carousel from 'react-bootstrap/Carousel'

import pic1 from '../../assets/pic1.jpg'  
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import pic5 from '../../assets/pic5.jpg'
import pic6 from '../../assets/pic6.jpg'

const Carousel_chan = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100 ta-c"
            src={pic1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Khám phá mọi miền, trải nghiệm không giới hạn!</h5>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Chuyến đi hoàn hảo bắt đầu từ đây!</h5>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Hành trình tuyệt vời, giá trị vượt trội – Du lịch ngay hôm nay!</h5>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100"
            src={pic4}
            alt="Fourth slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Du lịch không chỉ là đến nơi, mà là tận hưởng từng khoảnh khắc!</h5>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100"
            src={pic5}
            alt="Fifth slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Đi đâu cũng dễ dàng, cùng chúng tôi khám phá thế giới!</h5>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100"
            src={pic6}
            alt="Sixth slide"
          />
        </div>
        <Carousel.Caption>
          <h5>Mỗi chuyến đi là một kỷ niệm, mỗi khoảnh khắc là một trải nghiệm!</h5>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousel_chan