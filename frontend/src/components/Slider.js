import { Carousel } from "react-bootstrap";

import WebDesign from "../assets/web-design.png";
import CompEng from "../assets/computer-engineering.png";
import DataMod from "../assets/database-servers.png";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={WebDesign} alt="Web Design Slide" />
        <Carousel.Caption>
          <h3>Web Design</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={CompEng} alt="Computer engineering Slide" />
        <Carousel.Caption>
          <h3>Computer Engineering</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={DataMod} alt="Relational Database Modeling Slide" />
        <Carousel.Caption>
          <h3>Relational Database Modeling</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Slider;
