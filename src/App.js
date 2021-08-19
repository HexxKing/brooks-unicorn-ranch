import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import data from './data';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // objects: data,
      locationsArray: [  {
        "type": "location",
        "name": "Barn"
      },
      {
        "type": "location",
        "name": "Pasture"
      },
      {
        "type": "location",
        "name": "Trails"
      }],
      unicornsArray: [{
        "name": "Brook",
        "location": "Barn"
      },
      {
        "name": "Hexx",
        "location": "Pasture"
      },
      {
        "name": "Sara",
        "location": "Trails"
      }]
    };
  };

  render(){
    return (
      <div className="App">
      <Header />
      <Main locationsArray={this.state.locationsArray} unicornsArray={this.state.unicornsArray}/>
      <Footer />
    </div>
    );
  }
}

export default App;
