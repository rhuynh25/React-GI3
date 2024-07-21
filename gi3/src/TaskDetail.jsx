import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TaskDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const task = this.props.tasks.find(task => task.id === id);
    if (!task) return <div>Task not found</div>;

    return (
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <Link to={`/edit-task/${task.id}`}>Edit</Link>
      </div>
    );
  }
}

export default TaskDetail;
