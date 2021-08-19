import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Unicorn from "./Unicorn";

class Location extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     renderSwitch: false,
  //   };
  // }

  renderSwitch = () => {
    this.props.unicornArray.forEach(unicorn =>{
      if (unicorn.location === this.props.location.name) {
        return true;
      }
    })
  }

  render() {
    return (
      <Card>
            <Card.Body>
              <Card.Title>{this.props.location.name}</Card.Title>
              <Card.Text>
                {this.renderSwitch ? this.props.unicornsArray.map((unicorn, idx) => (
                  unicorn.location === this.props.location.name ? 
                  <Unicorn 
                    unicornsToBeMade={unicorn}
                    unicornsArray={this.props.unicornsArray}
                    displayUnicorns={this.props.displayUnicorns}
                    key={unicorn}
                    index={idx}
                  /> : " " )) : " "}
              </Card.Text>
            </Card.Body>
          </Card>
    );
  }
}

export default Location;