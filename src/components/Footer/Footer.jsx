/**
 * @author Tan Dat
 * @documentation https://medium.com/@racosta323/create-a-simple-footer-using-react-bootstrap-58c4371a4ade
 */

import { Row, Col, Container, Image } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";

import LogoTourKing from "../../assets/tour_king_logo.svg"
import FacebookIcon from "../../assets/facebook_icon.svg"
import InstagramIcon from "../../assets/instagram_icon.svg"
import TiktokIcon from "../../assets/tiktok_icon.svg"
import YoutubeIcon from "../../assets/youtube_icon.svg"
import TelegramIcon from "../../assets/telegram_icon.svg"


//css
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row
          style={{ backgroundColor: '#1C2930', color: '#fff', padding: 50 }}
        >
          <Col>
            <NavLink to="/" className="nav-link">
              <Image
                src={LogoTourKing}
                alt="Company logo"
                width={300}
                height={300}
              />
            </NavLink>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <p className="fw-bold">Về Tour King</p>
              <NavLink className="nav-link">Cách đặt chỗ</NavLink>
              <NavLink className="nav-link">Liên hệ chúng tôi</NavLink>
              <NavLink className="nav-link">Trợ giúp</NavLink>
              <NavLink className="nav-link">Tuyển dụng</NavLink>
              <NavLink className="nav-link">Về chúng tôi</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <p className="fw-bold">Theo dõi chúng tôi</p>
              <NavLink to="https://www.facebook.com/" className="nav-link icon-container">
                <Image
                  src={FacebookIcon}
                  alt="Facebook icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                Facebook</NavLink>
              <NavLink to="https://www.instagram.com/" className="nav-link icon-container" >
                <Image
                  src={InstagramIcon}
                  alt="Instagram icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                Intagram</NavLink>
              <NavLink to="https://www.tiktok.com/" className="nav-link icon-container">
                <Image
                  src={TiktokIcon}
                  alt="Tiktok icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                TikTok</NavLink>
              <NavLink to="https://www.youtube.com/" className="nav-link icon-container">
                <Image
                  src={YoutubeIcon}
                  alt="Youtube icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                Youtube</NavLink>
              <NavLink to="https://web.telegram.org/a/" className="nav-link icon-container">
                <Image
                  src={TelegramIcon}
                  alt="Telegram icon"
                  width={48}
                  height={48}
                  className="icon"
                />
                Telegram</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <p className="fw-bold">Sản phẩm</p>
              <NavLink className="nav-link">Khách sạn</NavLink>
              <NavLink className="nav-link">Vé máy bay</NavLink>
              <NavLink className="nav-link">Vé vui chơi</NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <p className="fw-bold">Khác</p>
              <NavLink className="nav-link">Điều khoản và điều kiện</NavLink>
              <NavLink className="nav-link">Quy chế hoạt động</NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
