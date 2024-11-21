import React, { useState } from 'react';
import { TaskProvider, useTaskContext, ADD_TASK, SET_FILTER } from '../context/TaskContext';
import ListaDeTarefas from './ListaDeTarefas';

const App = () => {
  const { dispatch } = useTaskContext();
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      dispatch({ type: ADD_TASK, text: input });
      setInput('');
    }
  };

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas - Jéssica Bonjiovani - RA 1165120 </h1>
      
      <div className="task-input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Digite a tarefa" 
          aria-label="Digite a tarefa"
        />
        <button onClick={addTask} aria-label="Adicionar tarefa">Adicionar Tarefa</button>
      </div>
      
      <div className="filter-buttons">
        <button 
          onClick={() => dispatch({ type: SET_FILTER, filter: 'all' })} 
          className="filter all"
          aria-label="Mostrar todas as tarefas"
        >
          Todas
        </button>
        <button 
          onClick={() => dispatch({ type: SET_FILTER, filter: 'completed' })} 
          className="filter completed"
          aria-label="Mostrar tarefas concluídas"
        >
          Concluídas
        </button>
        <button 
          onClick={() => dispatch({ type: SET_FILTER, filter: 'pending' })} 
          className="filter pending"
          aria-label="Mostrar tarefas pendentes"
        >
          Pendentes
        </button>
      </div>

      <ListaDeTarefas />
    </div>
  );
};

const AppWithProvider = () => (
  <TaskProvider>
    <App />
  </TaskProvider>
);

export default AppWithProvider;
