/**
 * @author Quynh Anh
 * @document https://react-bootstrap.netlify.app/docs/components/navbar
 */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={`/`} className={'navbar-brand'}>Tour-King</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={`/home`} className={'nav-link'}>Home</NavLink>
            <NavLink to={`/users`} className={'nav-link'}>User</NavLink>
            <NavLink to={`/admin`} className={'nav-link'}>Admin</NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">              
              <NavLink to={`/login`} className={'dropdown-item'}>Login</NavLink>
              <NavLink to={`/signup`} className={'dropdown-item'}>Signup</NavLink>
              <NavDropdown.Divider />
              <NavLink to={`/others`} className={'dropdown-item'}>Others</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header