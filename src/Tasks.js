import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [task, setTask] = useState('');
  const navigate = useNavigate(); 

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { id: `${tasks.length + 1}`, text: task }]);
      setTask('');
    }
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    
    if (!destination) return;

    
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    let add, active = tasks, completed = completedTasks, deleted = deletedTasks;

    
    if (source.droppableId === 'tasks') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === 'completedTasks') {
      add = completed[source.index];
      completed.splice(source.index, 1);
    } else {
      add = deleted[source.index];
      deleted.splice(source.index, 1);
    }

    
    if (destination.droppableId === 'tasks') {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === 'completedTasks') {
      completed.splice(destination.index, 0, add);
    } else {
      deleted.splice(destination.index, 0, add);
    }

    setTasks(active);
    setCompletedTasks(completed);
    setDeletedTasks(deleted);
  };

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div className="tasks-container">
      <h2 className="tasks-heading">Make your tasks here</h2> {/* Added Heading */}
      <div className="input-section">
        <input
          type="text"
          placeholder="New task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-task-button">Add Task</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="drag-drop-context">
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="droppable-container"
              >
                <h3>Added</h3>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-item"
                        style={{ ...provided.draggableProps.style }}
                      >
                        {task.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="completedTasks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="droppable-container"
              >
                <h3>Completed</h3>
                {completedTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-item complete"
                        style={{ ...provided.draggableProps.style }}
                      >
                        {task.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="deletedTasks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="droppable-container"
              >
                <h3>Deleted</h3>
                {deletedTasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="task-item delete"
                        style={{ ...provided.draggableProps.style }}
                      >
                        {task.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout Button */}
    </div>
  );
};

export default Tasks;
