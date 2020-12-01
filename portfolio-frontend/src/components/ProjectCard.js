import { Card, Button } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <article className="d-flex mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/250x180?text=Project+image" />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </article>
  );
};
export default ProjectCard;
