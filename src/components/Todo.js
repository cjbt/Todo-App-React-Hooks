import React from 'react';
import './todo.css';

const Todo = props => {
  const toggleTodo = id => {
    let newComplete = props.message.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    props.useMessage(prevState => {
      return {
        ...prevState,
        todos: newComplete
      };
    });
    console.log(props.todo.completed);
  };
  return (
    <div>
      <h1
        onClick={() => toggleTodo(props.todo.id)}
        className={props.todo.completed ? 'line-through' : null}
      >
        {props.todo.task}
      </h1>
    </div>
  );
};

export default Todo;
