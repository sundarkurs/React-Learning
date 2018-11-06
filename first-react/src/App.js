import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
constructor(){
  super();

  this.state = {
    projects: []
  }

}

componentWillMount(){
  this.setState({
    projects: [
      {
        title: "Contact Portal",
        category: "B2C"
      },
      {
        title: "Agent Portal",
        category: "B2B"
      }
    ]
  })
}

handleAddProject(project){
  console.log(project);

  let projects = this.state.projects;
  projects.push(project);
  this.setState({
    projects: projects
  });
}

  render() {
    return (
      <div className="App">
        My App
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
