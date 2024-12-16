/**
 * @author Quynh Anh
 * @documentation https://react-bootstrap.netlify.app/docs/components/navbar
 */
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import { ContextStore } from '../../context/Context'
import axios from 'axios'
import Cookies from 'universal-cookie'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container, Image } from "react-bootstrap"

import LogoTourKing from "../../assets/tour_king_logo.svg"

import { NavLink } from 'react-router-dom'

import './Header.scss'
import DefaultAvatar from '../../assets/defaultAvatar.png'

const Header = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const {
    accessToken, setAccessToken,
    refreshToken, setRefreshToken,
    userid, setUserid,
    name, setName,
    isAdmin, setIsAdmin,
    useravatarurl, setUseravatarurl
  } = useContext(ContextStore)
  useEffect(() => {
    setAccessToken(cookies.get("accessToken"))
    if(accessToken) {
      const decodedAccessToken = jwtDecode(cookies.get("accessToken"))
      setIsAdmin(decodedAccessToken.isadmin)
      setUseravatarurl(decodedAccessToken.useravatarurl)
      setName(decodedAccessToken.name)
      console.log('check decoded accessToken in header: ', decodedAccessToken)
      console.log('===> check userid in decoded token in header: ', decodedAccessToken.userid)
      setUserid(decodedAccessToken.userid)
    }
  }, [accessToken])
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={`/`} className={'navbar-brand'}>
          <Image
            src={LogoTourKing}
            alt="Company logo"
            width={160}
            height={160}
            style={{margin: '-60px'}}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/User`} className={'nav-link'}>User</NavLink>
            {accessToken && <NavLink to={`/admin`} className={'nav-link'}>Admin</NavLink>}
            <NavLink to={`/flight`} className={'nav-link'}>Đặt vé</NavLink>
            <NavLink to={`/about`} className={'nav-link'}>Về chúng tôi</NavLink>
            {/* <NavDropdown title="Hỗ trợ" id="basic-nav-dropdown">       
              <NavLink to={`/login`} className={'dropdown-item'}>Login</NavLink>
              <NavLink to={`/signup`} className={'dropdown-item'}>Signup</NavLink>
              <NavDropdown.Divider />
              <NavLink to={`/others`} className={'dropdown-item'}>Others</NavLink>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <NavDropdown 
              title={<img src={useravatarurl !== '' ? useravatarurl : DefaultAvatar} style={{width: 40, borderRadius: 25}}></img>} 
              id="basic-nav-dropdown"
            >
              {accessToken && <NavLink to={`/user`} className={'dropdown-item'}>Trang cá nhân</NavLink>}
              {!accessToken && <NavLink to={`/login`} className={'dropdown-item'}>Đăng nhập/<br></br>Đăng ký</NavLink>}
              {accessToken && <NavDropdown.Divider/>}
              {accessToken && <NavLink to={`/login`} className={'dropdown-item'} onClick={() => {
                if(!cookies.get("accessToken")) alert("Login first !")
                cookies.remove("accessToken")
                cookies.remove("refreshToken")
                setAccessToken(null)
              }}>Đăng xuất</NavLink>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
