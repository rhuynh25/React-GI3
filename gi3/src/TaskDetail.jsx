import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h2>Task Detail</h2>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default TaskDetail;
