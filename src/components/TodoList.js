import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.message.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          useMessage={props.useMessage}
          message={props.message}
        />
      ))}
    </div>
  );
};

export default TodoList;
