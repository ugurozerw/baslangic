import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./customnavbar.css"
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"




const CustomNavbar = () => {
  return (
    <>

      <Navbar className='custom-navbar' expand="lg">
        <Nav.Link className="custom-navbar-header disabled-link">Navbar Örneği</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='cen' id="basic-navbar-nav">
          <Nav className="ml-auto">
          <div className="container">
            
            <img
              src="https://picsum.photos/id/62/25/25"
              alt="Logo"
              className='nav-img-pos'/>
            </div>

          <Link to="/" className="custom-navbar-elements">Anasayfa</Link>
          <Link to="/Hakkimizda" className="custom-navbar-elements">Hakkimizda</Link>
          <Link to="/Iletisim" className="custom-navbar-elements">İletişim</Link>
          </Nav>

          <Link className="link-spec" to="/LogIn" >
          <Button className='better-btn'>Giriş yap</Button>
          </Link>

          <Link className="link-spec" to="/SignUp" >
          <Button className='sign-up-btn'>Kaydol</Button>
          </Link>
          
        </Navbar.Collapse>
      </Navbar></>
  );
}

export default CustomNavbar;
