import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Trip.scss";
import rightImg from "../../image/Rectangle 17.jpg";
import leaf from "../../image/LEAF.png";
import map from "../../image/map icon.png";
import send from "../../image/send.png";
import { useState } from "react";
import { TripData } from "../Data/Data";

const Trip = () => {
  const [trip, setTrip] = useState(TripData);
  return (
    <div className="trip">
      <Container>
        <Row>
          <Col className="left">
            <h4>Easy and Fast</h4>
            <h1>
              Book Your Next Trip <br /> In 3 Easy Steps
            </h1>
            {trip.map((item) => (
              <div className="leftDiv">
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </Col>

          <Col>
            <Card className="right" style={{ width: "18rem" }}>
              <Card.Img
                className="rightImg mx-auto mt-2"
                variant="top"
                src={rightImg}
              />
              <Card.Body>
                <div >
                <Card.Title className="rightText">Trip To Greece</Card.Title>
                <Card.Text className="rightText">14-29 June | by Robbin jhon</Card.Text>
                </div>
                <div className="icon">
                  <div className="img">
                    <img src={leaf} alt="" />
                  </div>
                  <div className="img">
                    <img src={map} alt="" />
                  </div>
                  <div className="img">
                    <img src={send} alt="" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trip;
