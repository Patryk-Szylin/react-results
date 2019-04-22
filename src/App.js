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
      isLoading: true,
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
      this.setState({ items: res.data, isLoading: false });
    });
  }

  render() {
    const { isLoading, error, items } = this.state;

    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}

        {!isLoading ? (
          <div className="App container">
            <div className="row">
              <ResultCard holiday={items.HolidayResults.Holidays[0]} />
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>

      // <div>sadksaod</div>
    );
  }
}

export default App;
