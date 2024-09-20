import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ResumeNew() {
  const leftAlignStyle = { textAlign: "left" , marginLeft: "700px"};

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="justify-content-center">
          <div style={leftAlignStyle}>
            <Col md={8}>
              <h1>Tianyu Zhou</h1>
              <p>Phone: 778-891-3692 | Email: feelingzty@gmail.com</p>
              <br></br>

              <h3 className="left-align">Education</h3>
              <p>
                <strong>Simon Fraser University</strong> — B.Sc. in Computing Science, 3.80 GPA
                <br /> Sep. 2020 - Aug. 2024
              </p>
              <p>
                <strong>University of British Columbia</strong> — B.Sc. in Wood Science, 3.75 GPA
                <br /> Sep. 2013 - Jun. 2016
              </p>
              <br></br>

              <h3 className="left-align">Technical Skills</h3>
              <ul>
                <li><strong>Languages:</strong> C/C++, Java, JavaScript, Python, SQL, HTML5, CSS3</li>
                <li><strong>Frameworks and Libraries:</strong> React, Node.js, Spring Boot, Pandas, Numpy</li>
                <li><strong>Tools:</strong> Jira, Confluence, Git, Linux, Postman, Wireshark, Selenium, AWS (Amplify, EC2, Lambda, DynamoDB)</li>
              </ul>
              <br></br>

              <h3 className="left-align">Experience</h3>

              <h4 className="left-align">Test Automation Engineer (co-op)</h4>
              <p>Vecima Networks, Burnaby, BC — Jan 2023 - Dec 2023</p>
              <ul>
                <li>Created tests in a team of 4, recognized for great performance with an extended internship invitation.</li>
                <li>Initiated an automation testing project using Sahi Pro, ensuring milestones aligned with goals.</li>
                <li>Transformed frequent device replacement tests from manual to automated, reducing testing time by 90%.</li>
                <li>Applied Postman to API testing, uncovering hidden issues in APIs.</li>
              </ul>

              <h4 className="left-align">Software Test Engineer (co-op)</h4>
              <p>Gatekeeper Systems, Abbotsford, BC — Jan 2022 - Aug 2022</p>
              <ul>
                <li>Collaborated in regression testing, catching more than 50% of bugs in the release.</li>
                <li>Used Wireshark to analyze packets, discovering and resolving a long-standing major bug.</li>
                <li>Drafted automation test scripts using Selenium, achieving 100% feature coverage by the end of my internship.</li>
              </ul>

              <h4 className="left-align">CNC Programmer and CAD Drafter</h4>
              <p>Swiftsure Milling and Molding, Surrey, BC — Mar 2017 - Aug 2020</p>
              <ul>
                <li>Programmed a 3-axis CNC router using Mastercam to process wood materials to precise dimensions.</li>
                <li>Developed macros in VBA to automate project management worksheets in Excel.</li>
              </ul>
              <br></br>

              <h3 className="left-align">Projects</h3>

              <h4 className="left-align">Full Stack App Deployment on AWS</h4>
              <p>Simon Fraser University, Burnaby, BC — Jan 2024 - Apr 2024</p>
              <ul>
                <li>Collaborated with a team of 3 to design, develop, and deploy an application on AWS for note-taking and quiz generation.</li>
                <li>Developed backend services using Node.js and contributed to frontend development with React.</li>
                <li>Configured a load balancer on AWS Amplify to handle traffic and ensure high availability.</li>
                <li>Deployed the application using AWS Lambda and microservices architecture to improve scalability.</li>
              </ul>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;



