import React, { Component } from 'react';
import {Card,Col,Row,Button,Container} from 'react-bootstrap';
import './Courses.css';

class Courses extends Component {
    render() {
        return (
            <Container>
                <Row style={{width:"100%"}} className="my-5">
                    <Col xs={12} md={3}>
                      <Card style={{ width: '16rem'}} className="custom-card mb-4  p-1 text-center">
                        <Card.Body>
                            <Card.Title className="custom-card-title">Blog Post Writing</Card.Title>
                            <Card.Text>
                            We start with a detailed audit of your website to figure out what errors,
                             mistakes might be affecting your website's SEO & Rankings.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem'}} className="custom-card mb-4 text-center">
                        <Card.Body>
                        <Card.Title className="custom-card-title">Activity Calendar</Card.Title>
                            <Card.Text>
                            We start with a detailed audit of your website to figure out what errors,
                             mistakes might be affecting your website's SEO & Rankings.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem'}} className="custom-card mb-4 text-center">
                        <Card.Body>
                        <Card.Title className="custom-card-title">Keyword Research</Card.Title>
                            <Card.Text>
                            We figure out what keywords will be perfect for your brand. 
                            We hunt down keywords that can bring sales, traffic, leads & more.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} >
                    <Card style={{ width: '16rem' }} className="custom-card mb-4 text-center">
                        <Card.Body>
                        <Card.Title className="custom-card-title">Website Audit</Card.Title>
                            <Card.Text>
                            We start with a detailed audit of your website to figure out what errors,
                             mistakes might be affecting your website's SEO & Rankings.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Courses;