import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return <TodoItem key={todo.title} todo={todo} />;
      });
    }

    return (
      <div>
        <h3>Todos from API </h3>
        <div className="Todos">{todoItems}</div>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
