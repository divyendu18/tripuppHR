import React, { Component } from 'react';
import './Navbar.css';
import {Navbar,Nav,Button} from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class navbar extends Component {
    render() {
        return (
            <div>
              <Navbar  expand="lg" id="nav">
  <Navbar.Brand href="#home" id="nav_brand">Redirekt</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
    <Nav.Link href="#home" id="nav_link">Medium Business<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#home" id="nav_link">Public Sector<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Partners<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Help and Advice<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Voom</Nav.Link>
    </Nav>
    <Button id="nav_button">Sign up</Button>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default navbar;