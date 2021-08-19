import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Unicorn extends Component {

  moveLocations = (e) => {
    let updatedUnicorn = this.props.unicornsToBeMade;
    let allUnicorns = this.props.unicornsArray;

    allUnicorns.forEach(unicorn => {
      if (unicorn.name === updatedUnicorn.name) {
        unicorn.location = e;
      }
    });

    console.log(this.props.unicornsArray);
    this.props.displayUnicorns(allUnicorns);
  };

  render() {
    return (
      <>
        {this.props.unicornsToBeMade ? (
          <Navbar variant="dark" bg="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand>{this.props.unicornsToBeMade.name}</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse>
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark"
                    title="Where would you like to take your unicorn?"
                    menuVariant="dark"
                    onSelect={this.moveLocations}
                  >
                    <NavDropdown.Item eventKey="Barn">Barn</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Pasture">Pasture</NavDropdown.Item>
                    <NavDropdown.Item eventKey="Trails">Trails</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) : (
          " "
        )}
      </>
    );
  }
}

export default Unicorn;
