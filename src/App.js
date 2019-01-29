import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [message, useMessage] = useState({
    todos: [
      {
        task: 'helllo',
        id: 333,
        completed: false
      },
      {
        task: 'helllo2',
        id: Date.now(),
        completed: false
      }
    ]
  });

  return (
    <div className='App'>
      <TodoForm message={message} useMessage={useMessage} />
      <TodoList message={message} useMessage={useMessage} />
    </div>
  );
};

export default App;
