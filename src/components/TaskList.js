import React from 'react';
import Task from './Tasks';

function TaskList({ title, tasks, onDragStart, onDrop }) {
  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={onDrop} style={{ width: '30%', border: '1px solid black', padding: '10px' }}>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task key={task._id} task={task} index={index} onDragStart={onDragStart} />
      ))}
    </div>
  );
}

export default TaskList;
