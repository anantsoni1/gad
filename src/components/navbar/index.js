import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Group_59.svg";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarComponent() {
  return (
    <React.Fragment>
      <Navbar
        expand="lg"
        className="nav-background py-0"
        sticky="top"
        collapseOnSelect={true}
        variant="light"
      >
        <Navbar.Brand href="/" className="mx-0">
          <img
            src={Logo}
            alt=""
            className="img-fluid py-2 my-0 px-4"
            style={{ height: "85px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }}>
            <NavLink exact to="/" activeClassName="activeNav">
              <Nav.Link href="/" className="px-4 navbar-item text-center">
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/covid" activeClassName="activeNav">
              <Nav.Link href="/covid" className="px-4 navbar-item text-center">
                Covid 19 Updates
              </Nav.Link>
            </NavLink>
            <NavLink to="/about" activeClassName="activeNav">
              <Nav.Link href="/about" className="px-4 navbar-item text-center">
                about
              </Nav.Link>
            </NavLink>
            <NavLink to="/admissions" activeClassName="activeNav">
              <Nav.Link
                href="/admissions"
                className="px-4 navbar-item text-center"
              >
                admissions
              </Nav.Link>
            </NavLink>
            <NavLink to="/career" activeClassName="activeNav">
              <Nav.Link href="/career" className="px-4 navbar-item text-center">
                career
              </Nav.Link>
            </NavLink>
            <NavLink to="/team" activeClassName="activeNav">
              <Nav.Link href="/team" className="px-4 navbar-item text-center">
                team
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeNav">
              <Nav.Link
                href="/contact"
                className="px-4 navbar-item text-center"
              >
                Contact Us
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavbarComponent;
