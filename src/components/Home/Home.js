import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/self.jpg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tianyu Zhou</strong>
              </h1>
              <h1><strong style={{ color: 'black' }}>Welcome to my Homepage</strong></h1>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
