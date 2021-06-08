import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/css/header.css";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const hanndleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", hanndleScroll);

  function handleClick(event) {
    // event.preventDefault();
    // console.log("clicked.");
  }

  return (

    <header id="header" className={isScroll ? "header-scrolled fixed-top" : "header fixed-top" }>
      <Navbar
        className={isScroll ? "navbar" : "navbar"}
        collapseOnSelect
        expand="xl"
      >
        <Container>
          <Navbar.Brand className="logo text-light" href="/">
            <h1>Learn Alwayss</h1>
          </Navbar.Brand>
          <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-light">
              <Nav.Link href="/" onClick={handleClick}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleClick}>
                About
              </Nav.Link>
              <Nav.Link href="#services" onClick={handleClick}>
                Services
              </Nav.Link>
              <Nav.Link href="#experience" onClick={handleClick}>
                Experience
              </Nav.Link>
              <Nav.Link href="#skill" onClick={handleClick}>
                Skills
              </Nav.Link>
              <Nav.Link href="#project" onClick={handleClick}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={handleClick}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
