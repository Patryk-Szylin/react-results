import React, { Component } from "react";
import logo from "./logo.svg";
import ResultCard from "./components/ResultCard/ResultCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResultCard />
      </div>
    );
  }
}

export default App;
