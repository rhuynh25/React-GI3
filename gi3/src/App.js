import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Counter from './Counter';
import MovieSearch from './MovieSearch';
import MovieDetail from './MovieDetail';
import Task from './Task'; 
import TaskDetail from './TaskDetail';
import AddTask from './AddTask';
import EditTask from './EditTask';

class App extends Component {
  state = {
    tasks: []
  };

  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  updateTask = (updatedTask) => {
    this.setState({
      tasks: this.state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    });
  };

  deleteTask = (id) => {
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== id) });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/movies" element={<MovieSearch />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route
              path="/tasks"
              element={<Task tasks={this.state.tasks} deleteTask={this.deleteTask} />}
            />
            <Route
              path="/task/:id"
              element={<TaskDetail tasks={this.state.tasks} />}
            />
            <Route
              path="/add-task"
              element={<AddTask addTask={this.addTask} />}
            />
            <Route
              path="/edit-task/:id"
              element={<EditTask tasks={this.state.tasks} updateTask={this.updateTask} />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
