import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
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
          <span>{this.props.count}</span>
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

// map redux state to component props
const mapStateToProps = reduxState => ({
  count: reduxState.count
});

// Connect the component to Redux
export default connect(mapStateToProps)(Counter);
