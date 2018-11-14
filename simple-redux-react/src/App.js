import React, { Component } from "react";
import Counter from "./components/counter";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

// Reducer
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
  return state;
}

// Create a store
const store = createStore(reducer);

// Actions
store.dispatch({ type: "INCREMENT" });

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
