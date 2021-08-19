import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Unicorn from "./Unicorn";

class Location extends Component {

  render() {
    return (
      <Card>
            <Card.Body>
              <Card.Title>{this.props.location.name}</Card.Title>
              <Card.Text>
                <Unicorn unicornsToBeMade={this.props.filterUnicorns(this.props.location.name)[0].name}/>
                {/* {this.props.filterUnicorns(this.props.location.name)[0].name} */}
              </Card.Text>
            </Card.Body>
          </Card>
    );
  }
}

export default Location;