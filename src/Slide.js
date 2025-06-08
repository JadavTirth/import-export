import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slide.css';import img1 from "./image2/img1.jpeg";
import img2 from "./image2/img2.jpg";
import img3 from "./image2/img3.jpeg";

const Slide = () => {
  return (
    <div className="fullscreen-carousel">
      <Carousel interval={2000} fade indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img1}
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3 className="animated-text">Full Screen on Any Device</h3>
            <p className="animated-text">Responsive design powered by React Bootstrap</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img2}
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3 className="animated-text">Mobile Friendly</h3>
            <p className="animated-text">Looks great on phones, tablets and desktops</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
