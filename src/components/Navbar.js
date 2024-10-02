import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [weather, setWeather] = useState(null);
  const location = "Vancouver";
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "7a8f987971c0e98536aade52c1b7af60";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data.main.temp.toFixed(1));
      } else {
        console.error("Failed to fetch weather data");
      }
    };

    fetchWeather();

    // Set the current date
    const formatDate = () => {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with leading 0 if necessary
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = months[date.getMonth()]; // Get month abbreviation
      const year = date.getFullYear(); // Get full year
  
      return `${day}/${month}/${year}`; // Format the date as dd/MMM/YYYY
    };

    const currentDate = formatDate();
    setDate(currentDate);

    // Event listener for scroll
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* Date Display on the left */}
        <div className="navbar-date">
          {date}  &nbsp; &nbsp;  {location} &nbsp; &nbsp;
          {weather !== null && (
            <span>  {weather}°C</span>
          )}
        </div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificates"
                onClick={() => updateExpanded(false)}
              >
                Certificates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://master.d27ibldcg4r3os.amplifyapp.com"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
