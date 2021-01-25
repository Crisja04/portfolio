import { Container } from "react-bootstrap";

import ProjectsShort from "../components/ProjectsShort";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <Container>
      <main>
        <Slider />
        <ProjectsShort />
      </main>
    </Container>
  );
};
export default Home;
