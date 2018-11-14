import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>Counter</div>
        <input
          type="button"
          value="+"
          onClick={this.increment}
          name="increment"
        />
        <div>
          <span>{this.state.count}</span>
        </div>
        <input
          type="button"
          value="-"
          onClick={this.decrement}
          name="decrement"
        />
      </div>
    );
  }
}

export default Counter;
