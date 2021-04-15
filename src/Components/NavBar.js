import React from 'react';
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div style={{marginBottom:"80px"}}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Users List
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default NavBar;
