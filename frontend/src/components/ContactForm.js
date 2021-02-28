import React from 'react'
import {Card, Button, Form,Container, Col, Row} from 'react-bootstrap'
import {FaPhone, FaWhatsapp,FaTelegram} from 'react-icons/fa'

const ContactForm = () => {
    return (
        <>
        <Container fluid="md">
          <Row>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Name" />
                </Form.Group>
                <Form.Group controlId="formName">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                  <Form.Group controlId="formName">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="Enter your Phone Number" />
                </Form.Group>
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={2} placeholder="Enter your Message" style={{resize:"none"}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
            </Col>
            <Col> 
            <Container>
              <Row>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="tel:849-882-8698">
                        <Card.Title><FaPhone/></Card.Title>
                        <Card.Text>849-882-8698</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://wa.me/18498828698">
                        <Card.Title><FaWhatsapp/></Card.Title>
                        <Card.Text>849-882-8698</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://telegram.me/Crisja04">
                        <Card.Title><FaTelegram/></Card.Title>
                        <Card.Text>@Crisja04</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>     
                    </div> 
              </Row>
            </Container>
          </Col>
          </Row>
        </Container>
        </>
    )
};

export default ContactForm;