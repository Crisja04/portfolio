import React, { useState } from "react";
import { Card, Button, Form, Container, Col, Row, Modal } from "react-bootstrap";
import { FaPhone, FaWhatsapp, FaTelegram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactForm = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    status: "",
    statusMessage: "",
    variant: "",
  });

  const submitModal = () => {
    const handleClose = () => setShow(false);
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{message.status}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message.statusMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant={message.variant} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  // Form data encoding
  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // Contact form submitting & clear form fields
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...person }),
    })
      .then(() => {
        setMessage({
          status: "Success",
          statusMessage: "Your message was sent",
          variant: "success",
        });
        setShow(true);
        setPerson({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setMessage({
          status: error.toString(),
          statusMessage: "Message not sent",
          variant: "danger",
        });
        setShow(false);
      });

    e.preventDefault();
  };

  return (
    <>
      {/* submitModal() to render the dependent component on submit*/}
      {submitModal()}
      <Container fluid="md">
        <Row>
          <Col xs={12} md={6} className="mb-5 mr-5">
            <Form name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={person.name}
                  onChange={(e) => setPerson({ ...person, name: e.target.value })}
                  className="shadow-sm rounded-lg mb-4"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={person.email}
                  onChange={(e) => setPerson({ ...person, email: e.target.value })}
                  className="shadow-sm rounded-lg mb-4"
                  required
                />
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={person.phone}
                    onChange={(e) => setPerson({ ...person, phone: e.target.value })}
                    className="shadow-sm rounded-lg mb-4"
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Message"
                  value={person.message}
                  style={{ resize: "none" }}
                  onChange={(e) => setPerson({ ...person, message: e.target.value })}
                  className="shadow-sm rounded-lg mb-4"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="align-self-center">
                  Send
                </Button>
              </div>
            </Form>
          </Col>
          <Col>
            <Container>
              <Row className="text-dark">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <article className="mb-5">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://crisja04.me/">
                          <Card.Title>
                            <FaPhone />
                          </Card.Title>
                          <Card.Text>Call</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <article className="mb-5">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://crisja04.me/">
                          <Card.Title>
                            <FaWhatsapp />
                          </Card.Title>
                          <Card.Text>Whatsapp</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <article className="mb-5">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://telegram.me/Crisja04">
                          <Card.Title>
                            <FaTelegram />
                          </Card.Title>
                          <Card.Text>@Crisja04</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <article className="mb-5">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="mailto:cristian.javier.11@gmail.com">
                          <Card.Title>
                            <FaEnvelope />
                          </Card.Title>
                          <Card.Text>Email</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <article className="mb-5">
                    <Card className="shadow-sm">
                      <Card.Body className="d-flex flex-column justify-content-center text-center">
                        <a href="https://www.linkedin.com/in/cristian-tavarez-95b27a173/">
                          <Card.Title>
                            <FaLinkedin />
                          </Card.Title>
                          <Card.Text>Linkedin</Card.Text>
                        </a>
                      </Card.Body>
                    </Card>
                  </article>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactForm;
