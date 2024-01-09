import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function Header() {
  return (
    <Navbar style={{background:'#13118c'}} data-bs-theme="dark">
    <Container>

      <Navbar.Brand href="#home"><i class="fa-solid fa-file-contract"></i><span style={{margin:'10px'}}>BIDD WINNER</span></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#Dashboard" style={{marginLeft:'100px'}}>Dashboard</Nav.Link>
        <Nav.Link href="#Jobs">Jobs</Nav.Link>
        <Nav.Link href="#calender">calender</Nav.Link>
        <Nav.Link href="#Catalog">Cost Catalog</Nav.Link>
        <Nav.Link href="#Database">Database</Nav.Link>
        <Nav.Link href="#Tutorial">Tutorial</Nav.Link>
        <Nav.Link > <DropdownButton  style={{backgroundColor:'#13118c',marginLeft:'90px'}}  id="dropdown-basic-button" title="Profile">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton></Nav.Link>
    <Nav.Link><i class="fa-solid fa-bell fa-2xl"></i></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header