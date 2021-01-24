import { Container } from "react-bootstrap";
import React from "react";
import ProjectCard from "./ProjectCard";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Projects = () => {
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
      <main className="mb-3">
        <header>
          <h1 className="text-center mt-4 mb-3">Mis proyectos</h1>
        </header>
        <section className="container-fluid">
          <div className="row ">
            {data.map((item) => {
              return <ProjectCard key={item.id} {...item} />;
            })}
          </div>
        </section>
      </main>
    </Container>
  );
};
export default Projects;
