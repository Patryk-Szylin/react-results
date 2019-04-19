import React, { Component } from "react";
import logo from "./logo.svg";
import ResultCard from "./components/ResultCard/ResultCard";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var config = {
      headers: {
        "x-api-key": "N69hnxXk4VaiO8r8Roknf4jPhEci0hmr83DrqK1P"
      }
    };

    Axios.get(
      "https://st-holidaysearchapi.holidayhype.co.uk/" +
        "api/SimpleSearch/Package/1/Spain/Newcastle/June/all-boards/all-suppliers",
      config
    ).then(res => {
      console.log(res);
      this.setState({ items: res.data });
      console.log(this.state.items.HolidayResults.Holidays[0]);
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <h1>jdasidjasd</h1>
          <ResultCard title={this.state.items} />
        </div>
      </div>

      // <div>sadksaod</div>
    );
  }
}

export default App;
