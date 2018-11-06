import React, { Component } from 'react';

class AddProject extends Component {

    static defaultProps = {
        categories : ['B2B', 'B2C']
    }

    handleSubmit(e){

        if(this.refs.title.value === ''){
            alert('Title is mandatory.')
        }
        else{
            let newProject = {
                title: this.refs.title.value,
                category: this.refs.category.value
            };

            this.setState(
                { newProject: newProject },
                function(){
                    //console.log(this.state);
                    this.props.addProject(newProject);
                }
            );
        }
        e.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(
            category => { 
              return <option key={category} value={category}>{category}</option>
            }
        );
        
        return (
        <div>
            <h3>Add Project </h3>

            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type="text" ref="title" />
                </div>

                <div>
                    <label>Categories</label>
                    <select ref="category" >
                        {categoryOptions}
                    </select>
                </div>

                <input type="submit" value="Submit" />
            </form>

        </div>
        );
  }
}

export default AddProject;