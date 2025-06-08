import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container
} from "react-bootstrap";
import logo from './image2/Logo.jpg'

function NavbarComponent() {
  return (
    <Navbar style={{ backgroundColor: '#E8EAF6', color: 'black' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
          Export & Import
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link}  to="/">Home</Nav.Link>
            <Nav.Link href="#content">About Us</Nav.Link>
            <Nav.Link href="#contect">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
