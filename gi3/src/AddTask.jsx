import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      title: this.state.title,
    };
    this.props.addTask(newTask);
  };

  render() {
    return (
      <div>
        <h1>Add Task</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
