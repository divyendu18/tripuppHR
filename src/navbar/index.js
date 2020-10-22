import React, { Component } from 'react';
import './Navbar.css';
import {Navbar,Nav,Button} from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class navbar extends Component {
    render() {
        return (
            <div>
              <Navbar  expand="lg" id="nav">
  <Navbar.Brand href="#home" id="nav_brand">Edutech</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="#home" id="nav_link">Boards<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Books<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Exams<ExpandMoreIcon/></Nav.Link>
      <Nav.Link href="#link" id="nav_link">Why us?</Nav.Link>
    </Nav>
    <Button id="nav_button">Sign up</Button>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default navbar;