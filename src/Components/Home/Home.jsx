import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import homeImg from "../../image/Image.png";
import playBtn from "../../image/Play button.png";

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <div className="leftSide">
              <h3>Best Destinations Around The World</h3>
              <p className="leftPara">Travel, Enjoy <br /> and Live a New <br /> and full life</p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, labore quas quisquam tempore beatae veritatis.
              </span>{" "}
              <br />
              <div className="leftbtn">
                <div>
                  <Button className="rounded" variant="warning">Find out more</Button>
                </div>
                <div>
                  <img src={playBtn} alt="" />
                </div>
                <div>
                  <p>Play Demo</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="rightSide">
            <img src={homeImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
