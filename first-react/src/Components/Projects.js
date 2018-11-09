import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";

class Projects extends Component {
  deleteProject(id) {
    console.log("Delete");
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            key={project.id}
            project={project}
          />
        );
      });
    }

    return (
      <div>
        <h3>Projects </h3>
        <div className="Projects">{projectItems}</div>
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func // PropTypes is PascalCase
};

export default Projects;
