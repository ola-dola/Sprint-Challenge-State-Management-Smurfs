import React, { Component } from "react";
import SmurfsContext from '../components/App'
import "./App.css";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/O Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        {/* <div>Start inside of your `src/index.js` file!</div> */}
        <div>I will have fun!</div>
      </div>
    );
  }
}

export default App;
