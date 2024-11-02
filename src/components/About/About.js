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
            xs={12}  // Ensure that on extra small screens, it takes full width
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
              marginRight: '100px'  // Consider adjusting or removing the right margin on smaller screens
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            xs={12}  // Control for smaller screens
            className="about-img"
            style={{ paddingBottom: "20px" }}
          >
            <img src={myImg} alt="about" className="responsive-img" />
          </Col>
        </Row>
    </Container>
  );
}

export default About;
