import { useState } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage_3 from "../IMG/Bugatti.png";
import ExampleCarouselImage_1 from "../IMG/bugattisport.png";
import ExampleCarouselImage_2 from "../IMG/bugattisportime.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="Carousel_imge" src={ExampleCarouselImage_3} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel_imge" src={ExampleCarouselImage_1} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel_imge" src={ExampleCarouselImage_2} alt="" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
