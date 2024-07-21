import React, { Component } from 'react';

class EditTask extends Component {
  state = {
    title: '',
    description: ''
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const task = this.props.tasks.find(task => task.id === id);
    if (task) {
      this.setState({ title: task.title, description: task.description });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const updatedTask = {
      id,
      title: this.state.title,
      description: this.state.description
    };
    this.props.updateTask(updatedTask);
    this.props.history.push('/tasks');
  };

  render() {
    return (
      <div>
        <h1>Edit Task</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default EditTask;
