import { Container } from "react-bootstrap";

import Form from '../components/ContactForm'

const Contact = () => {
  return (
    <Container>
      <main >
        <h1 className="text-center mt-4 mb-3">Contact me</h1>
        <Form/>
      </main>
    </Container>
  );
};
export default Contact;
