/**
 * @author Quynh Anh
 * @documentation https://react-bootstrap.netlify.app/docs/components/navbar
 */
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container, Image } from "react-bootstrap"

import LogoTourKing from "../../assets/tour_king_logo.svg"

import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={`/`} className={'navbar-brand'}>
          <Image
            src={LogoTourKing}
            alt="Company logo"
            width={200}
            height={200}
            style={{margin: '-60px'}}
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/users`} className={'nav-link'}>User</NavLink>
            <NavLink to={`/admin`} className={'nav-link'}>Admin</NavLink>
            <NavLink to={`/flight`} className={'nav-link'}>Đặt vé</NavLink>
            <NavDropdown title="Hỗ trợ" id="basic-nav-dropdown">              
              <NavLink to={`/login`} className={'dropdown-item'}>Login</NavLink>
              <NavLink to={`/signup`} className={'dropdown-item'}>Signup</NavLink>
              <NavDropdown.Divider />
              <NavLink to={`/others`} className={'dropdown-item'}>Others</NavLink>
            </NavDropdown>
          </Nav>
          {
            isLogin === false ?
            <Nav>
              <button 
                style={{border: '1px solid black', borderRadius: '15px', width: '150px', marginRight: '10px'}} 
                className={'nav-link'}
                onClick={() => setIsLogin(!isLogin)}
              >
                <NavLink to={`/login`} style={{textDecoration: 'none', color: 'white'}}>Đăng nhập</NavLink>
              </button>
              <button style={{border: '1px solid black', borderRadius: '15px', width: '100px', backgroundColor: '#3BC4C9'}} className={'nav-link'}>
                <NavLink to={`/login`} style={{textDecoration: 'none', color: 'white'}}>Đăng ký</NavLink>
              </button>
            </Nav>
            :
            <Nav>
              <button style={{border: '1px solid black', borderRadius: '15px', width: '300px', marginRight: '10px'}} className={'nav-link'}>
                <NavDropdown title="Tao đã đăng nhập" id="basic-nav-dropdown">              
                  <NavLink to={`/user`} className={'dropdown-item'}>Hồ sơ của tôi</NavLink>
                  <NavLink to={`/settings`} className={'dropdown-item'}>Cài đặt</NavLink>
                  <NavDropdown.Divider />
                  <div className={'dropdown-item'} onClick={() => setIsLogin(!isLogin)}> Đăng xuất</div>
                </NavDropdown>
              </button>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header