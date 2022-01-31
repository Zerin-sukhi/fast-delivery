import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
//import Menubar from './Menubar';
import TopHeader from "./TopHeader";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <TopHeader></TopHeader>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/home">Fast Delivery</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              {user.email && (
                <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Link to="/myOrder">My Order</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Link to="/manageOrder">Manage Order</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Link to="/addServices">Add New Services</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                {user.email ? (
                  <button onClick={logOut}>Log Out</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

//user?.email && <button onClick={logOut}>Log Out</button>
