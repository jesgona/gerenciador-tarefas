import React from 'react';
import { useTaskContext, DELETE_TASK, TOGGLE_TASK } from '../context/TaskContext';

const Tarefa = ({ task }) => {
  const { dispatch } = useTaskContext();

  const toggleTask = () => {
    dispatch({ type: TOGGLE_TASK, id: task.id });
  };

  const deleteTask = () => {
    dispatch({ type: DELETE_TASK, id: task.id });
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleTask} 
        id={`task-checkbox-${task.id}`}
        aria-label={`Marcar tarefa "${task.text}" como concluída`}
      />
      <span>{task.text}</span>
      <button className="delete" onClick={deleteTask} aria-label={`Excluir tarefa "${task.text}"`}>
        Excluir
      </button>
    </div>
  );
};

export default Tarefa;
