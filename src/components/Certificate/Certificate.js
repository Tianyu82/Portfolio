import React from "react";
import { Container } from "react-bootstrap";

function Certificate() {
    return (
        <div>
            <Container fluid className="certificate-section">
            <h2 className="certificate-heading">My Certifications</h2>
            <div style={{ marginLeft: "50px" }}>
                <ul className="certificate-links">
                    <li>
                        <a href="https://atsqa.org/certified-testers/profile/5173a8c721db4d9d88bc760d873e3041" target="_blank"> ISTQB (CTFL) </a>
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