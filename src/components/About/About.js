import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/about.png";

function About() {

  const leftAlignStyle = { textAlign: "left" , marginLeft: "185px"};

  return (
    <Container fluid className="about-section">
      <Container style={leftAlignStyle}>
        <Row style={{ padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={myImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
