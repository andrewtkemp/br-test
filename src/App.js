import React, { Component } from 'react';
import Restaurants from "./pages/Restaurants";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Restaurants/>
      </div>
    );
  }
}

export default App;
