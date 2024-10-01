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
              <p style={{ color: 'black', fontSize: '1em' }}>Hey There ! I'M <strong className="main-name"> Tianyu Zhou, </strong> </p>
                <strong > Software Engineer </strong>
                <br></br>
                <strong> based in Vancouver, Canada</strong>
              </h1>
              <br></br>
              <p style={{ color: 'black', fontSize: '1em' }}>I am a recent graduate in Computer Science, ready to take on new challenges. </p>
              <p style={{ color: 'black', fontSize: '1em' }}>My dream is to build impactful software</p>
              <p style={{ color: 'black', fontSize: '1em' }}>that thousands of people maybe more can directly benefit from it. </p>
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
