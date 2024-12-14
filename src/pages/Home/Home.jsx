
import Carousel_chan from './Carousel_chan.jsx'
import MultiCarousel from './MultiCarousel.jsx'
import { TbPlaneDeparture } from "react-icons/tb";

import './Home.scss'

const Home = () => {
  return (
    <>
      <div className='Carousel-container'>
        <Carousel_chan></Carousel_chan>
      </div>
      <div className='titles'>
        <TbPlaneDeparture />
        &nbsp;
        Các chuyến bay phổ biến với Vietnam Airline
      </div>
      <MultiCarousel Airline={'Vietnam Airline'}/>
      <div className='titles'>
        <TbPlaneDeparture />
        &nbsp;
        Các chuyến bay phổ biến với Vietjet Air</div>
      <MultiCarousel Airline={'Vietjet Air'}/>
      <div className='titles'>
        <TbPlaneDeparture />
        &nbsp;
        Các chuyến bay phổ biến với Bamboo Airways</div>
      <MultiCarousel Airline={'Bamboo Airways'}/>

      {/* <div className='reason-area'>
        <p className='reason-title'>Lý do nên đặt chỗ với Tour King ?</p>
        <div className='reason-area-body'>
          <div className='reason-child'>
            <div style={{flex: '1', marginRight: '5px'}}>
              <img src={pic1} alt="" style={{width: '100%', borderRadius: '10px'}} />
            </div>
            <div style={{flex: '3'}}>
              <p><b>Đáp ứng mọi nhu cầu của bạn</b><br></br>
              <br></br>
              Từ chuyến bay, lưu trú, đến điểm tham quan, 
              bạn có thể tin chọn sản phẩm hoàn chỉnh và Hướng Dẫn Du Lịch của chúng tôi.</p>
            </div>
          </div>

          <div className='reason-child'>
            <div style={{flex: '1', marginRight: '5px'}}>
              <img src={pic1} alt="" style={{width: '100%', borderRadius: '10px'}} />
            </div>
            <div style={{flex: '3'}}>
              <p><b>Tùy chọn đặt chỗ linh hoạt</b><br></br>
              <br></br>
              Kế hoạch thay đổi bất ngờ? Đừng lo! Đổi lịch hoặc Hoàn tiền dễ dàng.</p>
            </div>
          </div>

          <div className='reason-child'>
            <div style={{flex: '1', marginRight: '5px'}}>
              <img src={pic1} alt="" style={{width: '100%', borderRadius: '10px'}} />
            </div>
            <div style={{flex: '3'}}>
              <p><b>Thanh toán an toàn và thuận tiện</b><br></br>
              <br></br>
              Tận hưởng nhiều cách thanh toán an toàn, bằng loại tiền thuận tiện nhất cho bạn.</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;