import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Category.scss";
import { Data } from "../Data/Data";

const Category = () => {
  const [items, setItems] = useState(Data);
  return (
    <div className="category">
      <p className="title">Category</p>
      <h1>We Offer Best Services</h1>
      <div className="top">
        <Container>
          <Row>
            {items.map((item) => (
              <Col sm>
                <Card className="card">
                  <Card.Img
                    className="cardImg mx-auto"
                    variant="top"
                    src={item.img}
                  />
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      {item.cardTitle}
                    </Card.Title>
                    <Card.Text className="cardDesc">
                      {item.cardDesc}
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

export default Category;
