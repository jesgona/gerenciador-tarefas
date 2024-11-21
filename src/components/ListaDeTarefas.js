import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import Tarefa from './Tarefa';

const ListaDeTarefas = () => {
  const { state } = useTaskContext();
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map((task) => (
        <Tarefa key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
