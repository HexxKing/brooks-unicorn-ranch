import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Unicorn extends Component {

  unicornToBeRendered = () => {
    
  };

  render() {
    return (
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">{this.props.unicornsToBeMade}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark"
                title="Where would you like to take your unicorn?"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Barn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pasture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trails</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Unicorn;
