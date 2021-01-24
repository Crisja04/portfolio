import { Card, Button } from "react-bootstrap";
// Future functionality
// Add custom image for every project openGraphImageUrl
const ProjectCard = ({ name, description, url }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 ">
      <article className="mb-5  d-flex justify-content-center">
        <Card className="shadow-sm" style={{ width: "18rem", height: "25rem" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x180?text=Project+image" />
          <Card.Body className="d-flex flex-column justify-content-center text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="action" href={url} target="_blank" className="mt-auto">
              Read more
            </Button>
          </Card.Body>
        </Card>
      </article>
    </div>
  );
};
export default ProjectCard;
