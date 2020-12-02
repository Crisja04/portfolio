import { Card, Button } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 ">
      <article className="mb-5  d-flex justify-content-center">
        <Card className="shadow-sm" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x180?text=Project+image" />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="action">Read more</Button>
          </Card.Body>
        </Card>
      </article>
    </div>
  );
};
export default ProjectCard;
