import React from 'react';

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
  };
  return (
    <div>
      <h1 onClick={() => toggleTodo(props.todo.id)}>{props.todo.task}</h1>
    </div>
  );
};

export default Todo;
