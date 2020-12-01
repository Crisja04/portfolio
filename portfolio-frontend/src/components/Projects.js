import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <Container>
      <main className="mb-3">
        <header>
          <h1 className="text-center mt-4 mb-3">Projects</h1>
        </header>
        <section className="d-flex flex-wrap justify-content-md-between justify-content-center">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </main>
    </Container>
  );
};
export default Projects;
