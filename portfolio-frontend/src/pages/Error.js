import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
const Error = () => {
  return (
    <Container>
      <main className="text-center mt-4 mb-3 vh-100">
        <h1>Page not found</h1>
        <Link to="/" className="btn btn-primary">
          Homepage
        </Link>
      </main>
    </Container>
  );
};
export default Error;
