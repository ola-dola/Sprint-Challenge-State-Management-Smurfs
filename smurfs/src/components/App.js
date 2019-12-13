import React, { Component } from "react";
import smurfsContext from "../contexts/smurfsContext";
import axios from "axios";
import "./App.css";
import SmurfsList from "./SmurfsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      formValues: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          ...this.state,
          apiData: res.data,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div className="App">
          <h1>SMURFS! 2.0 W/O Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          {/* <div>Start inside of your `src/index.js` file!</div> */}
          <div>I will have fun!</div>

        <smurfsContext.Provider value={this.state}>
          <SmurfsList />
        </smurfsContext.Provider>
      </div>
    );
  }
}

export default App;
