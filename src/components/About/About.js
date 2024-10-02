import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/about.png";

function About() {

  return (
    <Container fluid className="about-section">
        <Row style={{ textAlign: "left", padding: "10px" }}>
          <Col
            md={6}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
              marginRight: '100px' 
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{paddingBottom: "20px" }}
            className="about-img"
          >
            <img src={myImg} alt="about" style={{ maxHeight: "800px" }} />
          </Col>
        </Row>
    </Container>
  );
}

export default About;
