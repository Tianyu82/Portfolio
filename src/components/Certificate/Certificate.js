import React from "react";
import { Container } from "react-bootstrap";
import certificateImage from "../../Assets/certificate.jpg";

function Certificate() {
    return (
        <div>
            <Container fluid className="certificate-section">
            <h2 className="certificate-heading">My Certifications</h2>
            <div style={{ marginLeft: "50px" }}>
                <ul className="certificate-links">
                    <li>
                    <a href={certificateImage} target="_blank" rel="noopener noreferrer"> ISTQB Certification (Click to View) </a>
                    </li>
                </ul>
                <div className="certificate-description">
                    <p> ISTQB® is the leading global certification scheme in the field of software testing. </p>
                    <p> As of June 2023, ISTQB® has administered 1.3 million exams and issued more than 957k certifications in over 130 countries.</p>
                    <p> ISTQB® is one of the biggest and most established vendor-neutral professional certification schemes in the world. </p>
                </div>
            </div>
            
            </Container>
        </div>
    );
}

export default Certificate;