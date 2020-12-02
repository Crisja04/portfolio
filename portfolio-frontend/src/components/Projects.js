import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <Container>
      <main className="mb-3">
        <header>
          <h1 className="text-center mt-4 mb-3">Projects</h1>
        </header>
        <section className="container-fluid">
          <div className="row ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </main>
    </Container>
  );
};
export default Projects;
