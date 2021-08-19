import React from "react";
import Location from "./Location";


class Main extends React.Component {

  // Returns an array with all the unicorns with a matching location
  filterUnicorns = (locationName) =>
    this.props.unicornsArray.filter(
      (unicorn) => unicorn.location === locationName
    );

  render() {
    return (
      <div>
        {this.props.locationsArray.map((location) => (
          <Location 
            location={location}
            filterUnicorns={this.filterUnicorns}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Main;
