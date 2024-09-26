import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ResumeNew() {
  const leftAlignStyle = { textAlign: "left" , marginLeft: "500px"};

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="justify-content-center">
          <div style={leftAlignStyle}>
            <Col md={8}>
              <h1 style={{color:"black", fontWeight: "bold"}}>Tianyu Zhou</h1>
              <p style={{ whiteSpace: "pre" }}>Phone: 778-891-3692  |  Email: feelingzty@gmail.com  |  Linkedin: https://www.linkedin.com/in/tianyu-zhou-1401a293</p>
              <br></br>

              <h3 className="left-align" style={{color:"black", fontWeight: "bold"}}>Education</h3>
              <p>
                <strong>Simon Fraser University</strong> — B.Sc. in Computing Science, 3.80 GPA
                <br /> Sep. 2020 - Aug. 2024
              </p>
              <p>
                <strong>University of British Columbia</strong> — B.Sc. in Wood Science, 3.75 GPA
                <br /> Sep. 2013 - Jun. 2016
              </p>
              <br></br>

              <h3 className="left-align" style={{color:"black", fontWeight: "bold"}}>Technical Skills</h3>
              <ul>
                <li><strong>Languages:</strong> C/C++, Java, JavaScript, Python, SQL, HTML5, CSS3</li>
                <li><strong>Frameworks and Libraries:</strong> React, Node.js, Spring Boot, Pandas, Numpy</li>
                <li><strong>Tools:</strong> Jira, Confluence, Git, Linux, Postman, Wireshark, Selenium, AWS (Amplify, EC2, Lambda, DynamoDB)</li>
              </ul>
              <br></br>

              <h3 className="left-align" style={{color:"black", fontWeight: "bold"}}>Experience</h3>

              <h4 className="left-align">Test Automation Engineer (co-op)</h4>
              <p>Vecima Networks, Burnaby, BC — Jan 2023 - Dec 2023</p>
              <ul>
                <li>Conducted QA in a team of three, recognized for great performance with an extended internship invitation.</li>
                <li>Initiated an automation testing project for the company’s new platform using the JavaScript-based tool Sahi Pro. Set milestones for each phase to make sure the project always aligns with the goals.</li>
                <li>Actively engaged with the development team to gather feedback, and iteratively refined test scripts based on their suggestions to make sure the project met the established benchmarks.</li>
                <li>Transformed frequent device replacement tests from manual to automated, reducing 90% of testing time.</li>
                <li>Effectively distributed test flows logically to multiple threads to improve the concurrency of test execution.</li>
                <li>Applied Postman to API testing, uncovering hidden issues in APIs.</li>
              </ul>
              <br></br>

              <h4 className="left-align">Software Test Engineer (co-op)</h4>
              <p>Gatekeeper Systems, Abbotsford, BC — Jan 2022 - Aug 2022</p>
              <ul>
                <li>Conducted static testing on product specifications, proactively identifying and clarifying ambiguities</li>
                <li>Analyzed product specifications to develop comprehensive test plans, including clear objectives, appropriate testing techniques, and detailed test cases</li>
                <li>Collaborated with a 3-person team to conduct regression testing on firmware, web, and mobile applications, identifying over 50% of the bugs in the release, and ensuring comprehensive cross-platform verification</li>
                <li>Logged detailed bug tickets in compliance with company documentation standards, and worked closely with developers and business stakeholders to resolve issues and meet product acceptance criteria</li>
                <li>Conducted bug confirmation testing and user acceptance testing to ensure that bugs were fixed before release</li>
                <li>Introduced Wireshark from school to the work projects, to analyze the packets between the server and the connected devices, resulting in the discovery and resolution of one long-lasting major bug</li>
              </ul>
              <br></br>

              <h4 className="left-align">CNC Programmer and CAD Drafter</h4>
              <p>Swiftsure Milling and Molding, Surrey, BC — Mar 2017 - Aug 2020</p>
              <ul>
                <li>Drafted and finalized customer drawings using AutoCAD, and programmed a CNC router using Mastercam</li>
                <li>Conducted quality control on multiple production lines to detect defects in wood products</li>
                <li>Automated the calculation of sales and production metrics using VBA macros in Excel</li>
              </ul>
              <br></br>

              <h3 className="left-align" style={{color:"black", fontWeight: "bold"}}>Projects</h3>

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



