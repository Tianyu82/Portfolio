import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <p>Coming soon!</p>
    // <Container fluid className="project-section">
    //   <Container>
    //     <h1 className="project-heading">
    //       My Recent <strong className="purple">Works </strong>
    //     </h1>
    //     <p style={{ color: "white" }}>
    //       Here are a few projects I've worked on recently.
    //     </p>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={chatify}
    //           isBlog={false}
    //           title="Chatify"
    //           description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
    //           ghLink="https://github.com/soumyajit4419/Chatify"
    //           demoLink="https://chatify-49.web.app/"
    //         />
    //       </Col>

    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={bitsOfCode}
    //           isBlog={false}
    //           title="Bits-0f-C0de"
    //           description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
    //           ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
    //           demoLink="https://blogs.soumya-jit.tech/"
    //         />
    //       </Col>

    //     </Row>
    //   </Container>
    // </Container>
  );
}

export default Projects;