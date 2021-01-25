import { Container, Button } from "react-bootstrap";
import React from "react";
import ProjectCard from "./ProjectCard";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const ProjectsShort = () => {
  const { data, loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <Container>
      <section className="mb-3">
        <header>
          <h1 className="text-center mt-4 mb-3">Projects</h1>
        </header>
        <section className="container-fluid">
          <div className="row ">
            {data.slice(0, 3).map((item) => {
              return <ProjectCard key={item.id} {...item} />;
            })}
          </div>
          <Container className="d-flex justify-content-center">
            <Button variant="secondary" href="/portfolio">
              Go to projects
            </Button>
          </Container>
        </section>
      </section>
    </Container>
  );
};
export default ProjectsShort;
