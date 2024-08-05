import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import User_launch from "../User_launch/User_launch"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../IMG/LOGO.PNG";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";



const Navbarjs = () => {


  const Logout = () => {
    localStorage.removeItem("login");
    window.location.replace("/");
  };

  return (
    <div className="navbar_containner">
      <Navbar
        collapseOnSelect
        id="navbar_home"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand>
            <Link className="nav_nice" to={"/"}>
              <img onClick={Logout} className="logo" src={logo} alt="" />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="sjsjs" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav id="nav_link_home">
              <Link className="nav_nice" to={"/:userId/Home"}>
                <Nav.Link className="nav_link_1" id="nav_link_1" href="#Home">
                  Home
                </Nav.Link>
              </Link>
              <Link className="nav_nice" to={"/:userId/Home"}>
                {" "}
                <Nav.Link className="nav_link_1" id="nav_link_1" href="#about">
                  About US
                </Nav.Link>
              </Link>

              <Nav.Link className="nav_link_1" href="#Contact" id="nav_link_1">
                Contact US
              </Nav.Link>

              <Nav.Link className="nav_link_1" id="nav_link_1">
                <User_launch />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarjs;
 