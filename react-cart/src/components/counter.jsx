import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Counter {this.props.objCounter.id}</h4>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.objCounter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.objCounter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <div>{this.renderTags()}</div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.objCounter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.objCounter;
    return value === 0 ? "Zero" : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
