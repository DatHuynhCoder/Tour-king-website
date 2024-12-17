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
    <Carousel data-bs-theme="dark carousel-container">
      <Carousel.Item>
        <div style={{ width: '66%', margin: '0 auto' }}>
          <img
            className="d-block w-100 ta-c"
            src={pic1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h4>Chào mừng bạn đến với Tour King</h4>
          <p>Khách hàng là ưu tiên hàng đầu, sự hài lòng của khách hàng là hạnh phúc của chúng tôi</p>
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
          <h4>Nhanh chóng - Tiện lợi - Dễ dàng</h4>
          <p>Đặt vé máy bay bay chỉ bằng vài cú click chuột</p>
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
          <h4>Bạn muốn đến đâu ?</h4>
          <p>
            Hãy để Tour King thõa mãn ước mơ du lịch của bạn.
          </p>
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
          <h4>Bắt đầu đặt chỗ ngay</h4>
          <p>
            Ưu đãi hấp dẫn nhất. Trải nghiệm khó quên.
          </p>
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
          <h4>Vé máy bay tiện lợi, giá rẻ</h4>
          <p>
            Khám phá thế giới cùng chúng tôi, không giới hạn, không ràng buộc.
          </p>
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
          <h4>Một chuyến đi, vô vàng kỷ niệm</h4>
          <p>
            Mang đến cho bạn những chuyến đi vui vẻ, đầy cảm hứng.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousel_chan