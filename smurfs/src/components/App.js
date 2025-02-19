import React, { Component } from "react";
import smurfsContext from "../contexts/smurfsContext";
import axios from "axios";
import "./App.css";
import SmurfsList from "./SmurfsList";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      formValues: {
        name: "",
        age: "",
        height: "",
        id: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          ...this.state,
          apiData: res.data
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  componentDidUpdate() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          ...this.state,
          apiData: res.data
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  handleFormChange = event => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const postObject = {
      ...this.state.formValues,
      id: Date.now(),
    }

    axios
      .post("http://localhost:3333/smurfs", postObject)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/O Redux</h1>
        <div>Welcome to my state management version of Smurfs!</div>
        <div>I will have fun!</div>

        <smurfsContext.Provider
          value={{
            ...this.state,
            handleChange: this.handleFormChange,
            handleSubmit: this.handleSubmit
          }}
        >
          <SmurfsList />
          <Form />
        </smurfsContext.Provider>
      </div>
    );
  }
}

export default App;
