import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Group_59.svg";

function NavbarComponent() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar
        expand="xl"
        className="nav-background py-0"
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
            <NavLink
              exact
              to="/"
              activeClassName="activeNav"
              className={
                location.pathname === "/"
                  ? "px-3 navbar-item text-center active"
                  : "px-3 navbar-item text-center"
              }
            >
              <Nav.Link
                href="/"
                className={
                  location.pathname === "/"
                    ? "px-3 navbar-item text-center active"
                    : "px-3 navbar-item text-center"
                }
              >
                Home
              </Nav.Link>
            </NavLink>
            <NavLink to="/covid" activeClassName="activeNav">
              <Nav.Link href="/covid" className="px-3 navbar-item text-center">
                Health and Safety
              </Nav.Link>
            </NavLink>
            <NavDropdown
              eventKey={1}
              className="navbar-hidden"
              title="Overview"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink to="/principal" activeClassName="activeNav">
                  <Nav.Link href="/principal">
                    <div className="font-demi text-primaryColor">Principal</div>
                  </Nav.Link>
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/about" activeClassName="activeNav">
                  <Nav.Link href="/about">
                    <div className="font-demi text-primaryColor">About</div>
                  </Nav.Link>
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavLink to="/about" activeClassName="activeNav">
              <Nav.Link href="/about" className="px-3 navbar-item text-center">
                about
              </Nav.Link>
            </NavLink> */}
                       <NavDropdown
              eventKey={1}
              className="navbar-hidden"
              title="Parents"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink to="/parents" activeClassName="activeNav">
                  <Nav.Link href="/parents">
                    <div className="font-demi text-primaryColor">Parents Support Group</div>
                  </Nav.Link>
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/policies" activeClassName="activeNav">
                  <Nav.Link href="/policies">
                    <div className="font-demi text-primaryColor">School Policies</div>
                  </Nav.Link>
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/calendar" activeClassName="activeNav">
                  <Nav.Link href="/calendar">
                    <div className="font-demi text-primaryColor">Calendar</div>
                  </Nav.Link>
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavLink to="/calendar" activeClassName="activeNav">
              <Nav.Link
                href="/calendar"
                className="px-3 navbar-item text-center"
              >
                C
              </Nav.Link>
            </NavLink> */}
            <NavLink to="/admissions" activeClassName="activeNav">
              <Nav.Link
                href="/admissions"
                className="px-3 navbar-item text-center"
              >
                admissions
              </Nav.Link>
            </NavLink>
            {/* <NavLink to="/principal" activeClassName="activeNav">
              <Nav.Link
                href="/principal"
                className="px-3 navbar-item text-center"
              >
                Principal
              </Nav.Link>
            </NavLink> */}
            <NavLink to="/career" activeClassName="activeNav">
              <Nav.Link href="/career" className="px-3 navbar-item text-center">
                career
              </Nav.Link>
            </NavLink>
            <NavLink to="/team" activeClassName="activeNav">
              <Nav.Link href="/team" className="px-3 navbar-item text-center">
                team
              </Nav.Link>
            </NavLink>
            <NavLink to="/donation" activeClassName="activeNav">
              <Nav.Link
                href="/donation"
                className="px-3 navbar-item text-center"
              >
                DONATE
              </Nav.Link>
            </NavLink>
            <NavLink to="/contact" activeClassName="activeNav" className="mr-2">
              <Nav.Link
                href="/contact"
                className="px-3 navbar-item text-center"
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
