import React, { Component } from 'react';
import { Container,Row, Col,Button} from 'react-bootstrap';
import './Landing.css';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import illustration from '../assets/img/illustration.png';

class Landing extends Component {
    render() {
        return (
            <Container fluid="sm" id="landingContainer">
                <Row  style={{height:"100%" , alignItems:"center"}}>
              <Col xs={12} md={6}>
              <h1 id="landing_head">Every Student matters</h1>
              <p id="landing_content">Get your doubts clarified and attend LIVE classes<br></br>in the language of your choice</p>
              {/* <div className="searchbox"><input type="text" placeholder="search" id="search"/><SearchIcon/></div> */}
              <Button id="btn" className="my-2">Get the free app on Play Store</Button>

            </Col>
            <Col xs={12} md={6}>
              <img id="img" src={illustration} alt="" width="100%" className="mt-5"/>
              <div className="Icon"><h5><VideoLibraryIcon/>10,000+</h5>
              <h5><PeopleAltIcon/>35000+</h5></div>
            </Col>
          </Row>
          </Container>

        )
    }
}
export default Landing; 