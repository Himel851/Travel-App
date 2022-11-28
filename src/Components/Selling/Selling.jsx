import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Selling.scss";
import { SellingData } from "../Data/Data";

const Selling = () => {
  const [selling, setSelling] = useState(SellingData);
  return (
    <div className="selling">
      <p className="title">Top Selling</p>
      <h1>Top Destinations</h1>
      <div className="top">
        <Container>
          <Row>
            {selling.map((item) => (
              <Col sm>
                <Card className="card">
                  <Card.Img
                    className="cardImg mx-auto"
                    variant="top"
                    src={item.img}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {item.place} <span>${item.price}k</span>
                    </Card.Title>
                    <Card.Text className="cardDesc">
                      <img src={item.navImg} alt="" />
                      <span>{item.day} Days Trip</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Selling;
