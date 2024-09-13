import React from "react";
import { Container, Row } from "react-bootstrap";
import pdf from "../../Assets/Tianyu_Resume.pdf"; // adjust path if needed

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume d-flex justify-content-center">
          <embed
            src={pdf}
            type="application/pdf"
            width="100%"
            height="800px"
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

