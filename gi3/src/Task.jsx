import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Link to="/add-task">Added Task</Link>
        <ul>
          {this.props.tasks.map(task => (
            <li key={task.id}>
              <Link to={`/task/${task.id}`}>{task.title}</Link>
              <button onClick={() => this.props.deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
