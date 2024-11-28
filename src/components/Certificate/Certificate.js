import React from "react";
import { Container } from "react-bootstrap";
import certificateImageISTQB from "../../Assets/ISTQB.jpg";
import certificateImageSelenium from "../../Assets/CSETF.jpg";
import schoolTranscript from "../../Assets/SFU.pdf";

function Certificate() {
    return (
        <div>
            <Container fluid className="certificate-section">
            <h2 className="certificate-heading">Certifications and School Transcript</h2>
            <div style={{ marginLeft: "50px" }}>
                <ul className="certificate-links">
                    <li>
                    <a href={certificateImageISTQB} target="_blank" rel="noopener noreferrer"> ISTQB Certification (Click to View) </a>
                    </li>
                </ul>
                <div className="certificate-description">
                    <p> ISTQB® is the leading global certification scheme in the field of software testing. </p>
                    <p> As of June 2023, ISTQB® has administered 1.3 million exams and issued more than 957k certifications in over 130 countries.</p>
                    <p> ISTQB® is one of the biggest and most established vendor-neutral professional certification schemes in the world. </p>
                </div>
                <ul className="certificate-links">
                    <li>
                    <a href={certificateImageSelenium} target="_blank" rel="noopener noreferrer"> Selenium Certification (Click to View) </a>
                    </li>
                </ul>
                <div className="certificate-description">
                    <p> The International Software Quality Institute (iSQI) is a leading provider of certification examinations all over the world. </p>
                    <p> iSQI is one of the longest established and most trusted exam providers for worldwide-recognized certification.</p>
                    <p> The A4Q Certified Selenium 4 Tester Foundation certification connects relevant test automation theory with practical application for the effective use of Selenium in creating automated tests for web applications. </p>
                    <p> It is aimed at test professionals, test automation engineers, and developers who desire an understanding of how to design, implement, and maintain automated solutions using Selenium.</p>
                </div>
                <ul className="certificate-links">
                    <li>
                    <a href={schoolTranscript} target="_blank" rel="noopener noreferrer"> School Transcript (Click to View) </a>
                    </li>
                </ul>
            </div>
            
            </Container>
        </div>
    );
}

export default Certificate;