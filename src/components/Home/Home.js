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
                Hey! I'M
                <strong className="main-name"> Tianyu </strong>
              </h1>
              <br></br>
              <p><strong style={{ color: 'black', fontSize: '2em' }}>I am a recent graduate in Computer Science, ready to take on new challenges. </strong></p>
              <p><strong style={{ color: 'black', fontSize: '2em' }}>My dream is to build impactful software that thousands of people maybe more can directly benefit from it : &#41; </strong></p>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid image-hover"
                style={{ maxHeight: "1000px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

    </section>
  );
}

export default Home;
