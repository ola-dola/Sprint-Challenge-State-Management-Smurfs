import React, { Component } from "react";
import SmurfsContext from '../components/App';
import axios from 'axios';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      formValues: {}
    }
  }

  render() {
    return (
      <SmurfsContext.Provider value={this.state}>
        <div className="App">
          <h1>SMURFS! 2.0 W/O Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          {/* <div>Start inside of your `src/index.js` file!</div> */}
          <div>I will have fun!</div>
        </div>
      </SmurfsContext.Provider>
    );
  }
}

export default App;
