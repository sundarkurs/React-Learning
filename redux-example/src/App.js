import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
