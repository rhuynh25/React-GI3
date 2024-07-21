import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: Date.now(), text: task };
    addTask(newTask);
    navigate('/tasks');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
