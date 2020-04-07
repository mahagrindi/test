import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo1 from '../logo1.png'

class Head extends Component {
  render () { 
    return (
    <div id = "head">
    <nav class="navbar navbar-expand-lg navbar-light bg-light "  >
    
    <a class="navbar-brand" href="#"> <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" alt='logo' /></a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"> </span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarNav">
  
      <ul class="navbar-nav ml-auto " >

       <li class="nav-item">
          <a class="nav-link2" href="about-us.html">About us</a>
       </li>
  
        <li class="nav-item">
          <a class="nav-link" href="Careere.php"> carere</a>
        </li>
     
        <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      </ul>
  
    </div>
  
  </nav>
  
  </div>
    );
  }
}

export default Head ;
  