import React, { Component } from 'react';
import {Card,Col,Row,Button} from 'react-bootstrap';
import './Courses.css';

class Courses extends Component {
    render() {
        return (
            <Container-fluid>
                <Row style={{width:"100%"}} className="mt-5 mb-5">
                    <Col xs={12} md={3}>
                      <Card style={{ width: '16rem'}} className="ml-5 mr-3 mb-4 p-1 text-center">
                        <Card.Body>
                            <Card.Title>LIVE Classes</Card.Title>
                            <Card.Text>
                            Learn live from<br></br>the best tutors<br></br>in India.
                            </Card.Text>
                            <Button id="btn" className="my-2">Book now</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem'}} className="ml-5 mr-3 mb-4 text-center">
                        <Card.Body>
                            <Card.Title>Earn Cash</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button id="btn" className="my-2">Explore</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem'}} className="ml-5 mr-3 mb-4 text-center">
                        <Card.Body>
                            <Card.Title>Exam Preparation</Card.Title>
                            
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button id="btn" className="my-2">Explore</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem' }} className="ml-5 mr-3 mb-4 text-center">
                        <Card.Body>
                            <Card.Title>Sample Tests</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button id="btn" className="my-2">Explore</Button>
                        </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            </Container-fluid>
        )
    }
}

export default Courses;