import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

// Navbar logo
import Image_Logo from '../Assets/Images/Logo.png';

function NavbarMain() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>
              <NavLink to="/">
                 <img src={Image_Logo} alt='navbar-logo' className="navbar-logo d-inline-block align-text-top" />
              </NavLink>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Nav.Link as={NavLink} to="/" exact > Home </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/" > SmartPhones </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/" > Laptops </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/" > Earbuds </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/" > Speakers </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/" > Blog </Nav.Link>
            <Nav.Link as={NavLink} to="/" > Contact Us </Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search For Products"
              className="me-2"
              aria-label="Search"
              id='input-search-bar'
            />
            <span className='input-span'><i class="bi bi-search"></i></span>
          </Form>
        </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavbarMain;