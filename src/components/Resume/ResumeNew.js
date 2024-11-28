import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ResumeNew() {
  const leftAlignStyle = { textAlign: "left" , marginLeft: "500px"};

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="justify-content-center">
          <Col md={8} sm={12} style={{ textAlign: "left", padding: "20px" }}>
            <h1 style={{color:"black", fontWeight: "bold"}}>Tianyu Zhou</h1>
            <p style={{ whiteSpace: "pre-wrap" }}>Phone: 778-891-3692  |  Email: feelingzty@gmail.com  |  Linkedin: https://www.linkedin.com/in/tianyu-zhou-1401a293</p>
            <br />

            <h3 style={{color:"black", fontWeight: "bold"}}>Education</h3>
            <p>
              <strong>Simon Fraser University</strong> — B.Sc. in Computing Science, 3.80 GPA
              <br /> Sep. 2020 - Aug. 2024
            </p>
            <p>
              <strong>University of British Columbia</strong> — B.Sc. in Wood Science, 3.75 GPA
              <br /> Sep. 2013 - Jun. 2016
            </p>
            <br />

            <h3 style={{color:"black", fontWeight: "bold"}}>Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> C/C++, Java, JavaScript, Python, SQL, HTML5, CSS3</li>
              <li><strong>Frameworks and Libraries:</strong> React, Node.js, Pandas, Selenium Webdriver, Cypress, Jest</li>
              <li><strong>Tools:</strong> Jira, Confluence, Git, Linux, Postman, Wireshark, AWS (Amplify, EC2, Lambda, DynamoDB)</li>
            </ul>
            <br />

            <h3 style={{color:"black", fontWeight: "bold"}}>Experience</h3>
              <h4 className="left-align">Test Automation Engineer (co-op)</h4>
              <p>Vecima Networks, Burnaby, BC — Jan 2023 - Jan 2024</p>
              <ul>
                <li>Conducted automation testing by clear and comprehensive test design, efficient test implementation, test execution, and test script maintenance. Met testing objectives all the time, and got an extended internship invitation.</li>
                <li>Initiated an automation testing project for the company’s new platform using the JavaScript-based tool Sahi Pro. Set milestones for each phase to make sure the project always aligns with the goals.</li>
                <li>Actively engaged with the development team to gather feedback, and iteratively refined test scripts based on their suggestions to make sure the project met the established benchmarks.</li>
                <li>Transformed frequent device replacement tests from manual to automated, reducing 90% of testing time.</li>
                <li>Effectively distributed test flows to multiple threads to reduce the repeated test execution and increase concurrency.</li>
                <li>Used Postman on API testing and uncovered issues such as data inconsistency and status code errors in APIs.</li>
              </ul>
              <br></br>

              <h4 className="left-align">Software Test Engineer (co-op)</h4>
              <p>Gatekeeper Systems, Abbotsford, BC — Jan 2022 - Aug 2022</p>
              <ul>
                <li>Conducted reviewing on product specifications at an early stage, proactively identifying and clarifying ambiguities.</li>
                <li>Analyzed product specifications to develop comprehensive test plans, including clear objectives, appropriate testing techniques, and detailed test cases.</li>
                <li>Collaborated with a 3-person team to conduct regression testing on firmware, web, and mobile applications, identifying over 50% of the bugs in the release, and ensuring comprehensive cross-platform verification.</li>
                <li>Logged detailed bug tickets in compliance with company documentation standards, and worked closely with developers and business stakeholders to resolve issues and meet product acceptance criteria.</li>
                <li>Conducted bug confirmation testing and user acceptance testing to ensure that bugs were fixed before release.</li>
                <li>Introduced Wireshark tool from school projects to real work, to capture and analyze the packets on the server side, resulting in the discovery and resolution of one long-lasting major bug related to video downloading failure.</li>
              </ul>
              <br></br>

              <h4 className="left-align">CNC Programmer and CAD Drafter</h4>
              <p>Swiftsure Milling and Molding, Surrey, BC — Mar 2017 - Aug 2020</p>
              <ul>
                <li>Drafted and finalized customer drawings using AutoCAD, and programmed a CNC router using Mastercam.</li>
                <li>Conducted quality control on multiple production lines to detect defects in wood products.</li>
                <li>Automated the calculation of sales and production metrics using VBA macros in Excel, during the off-season.</li>
              </ul>
              <br></br>

              <h3 className="left-align" style={{color:"black", fontWeight: "bold"}}>Projects</h3>

              <h4 className="left-align">Full Stack App Deployment on AWS</h4>
              <p>Simon Fraser University, Burnaby, BC — Jan 2024 - Apr 2024</p>
              <ul>
                <li>Collaborated with a team of 3 to design, develop, and deploy a quiz application on AWS. Led the project thoroughly  using the Scrum framework by setting up weekly milestones and following up on the progress.</li>
                <li>Developed all backend services using Nodejs and assisted in writing frontend using React to meet the deadline.</li>
                <li>Deployed the application on AWS Lambda and split the application into loosely coupled microservices with replicas to increase availability and scalability.</li>
              </ul>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;



