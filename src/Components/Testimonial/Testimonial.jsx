import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialData } from "../Data/Data";
import { useState } from "react";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [testData, setTestData] = useState(TestimonialData);
  return (
    <div className="testimonial">
      <Container>
        <Row>
          <Col sm className="left">
            <h4>Easy and Fast</h4>
            <h1>
              Book Your Next Trip <br /> In 3 Easy Steps
            </h1>
          </Col>

          <Slider {...settings} className="slider">
            {testData.map((item) => (
              <Col sm className="right">
                <div className="rightTest">
                  <img src={item.img} alt="" />
                  <div className="quote">
                    <p>
                      &quot; {item.details} &quot;
                    </p>
                    <h3>{item.name}</h3>
                    <h5>{item.place}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
