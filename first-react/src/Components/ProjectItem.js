import React, { Component } from "react";
import PropTypes from "prop-types";

class ProjectItem extends Component {
  deleteProject(id) {
    console.log("Delete");
    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        <strong>{this.props.project.title}</strong> -{" "}
        {this.props.project.category}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          X
        </a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  projects: PropTypes.object,
  onDelete: PropTypes.func // PropTypes is PascalCase
};

export default ProjectItem;
