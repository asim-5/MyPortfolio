import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link, useNavigate  } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";
// import { HashLink } from 'react-router-hash-link';

function NavBar() {
  // const home2Ref = useRef(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // Scroll to the Home2 section after a short delay to ensure navigation has completed
  //   setTimeout(() => {
  //     const home2Section = document.getElementById('home2');
  //     if (home2Section) {
  //       home2Section.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 0);
  // }, [navigate]);


  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
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
              <Nav.Link as={Link} to="/Home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  navigate('/');

                  // Scroll to the Home2 section after a short delay to ensure navigation has completed
                  setTimeout(() => {
                    const home2Section = document.getElementById('scroll');
                    if (home2Section) {
                      home2Section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 0);
                }}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link as={Link} to="/Services" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Services
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={Link} to="/Form" onClick={() => updateExpanded(false)}>
                 <button className="professional-button"><span>Hire me?</span></button>
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
