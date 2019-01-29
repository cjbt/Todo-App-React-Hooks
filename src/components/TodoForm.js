import React, { useState } from 'react';

const TodoForm = props => {
  const [inputText, setInputText] = useState('');

  const handleChanges = e => {
    setInputText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.useMessage(prevState => ({
      ...prevState,
      todos: [
        ...prevState.todos,
        {
          task: inputText,
          id: Date.now(),
          completed: false
        }
      ]
    }));
    setInputText('');
  };

  const clearComplete = e => {
    e.preventDefault();
    let deleteComplete = props.message.todos.filter(todo => !todo.completed);
    props.useMessage(prevState => {
      return {
        ...prevState,
        todos: deleteComplete
      };
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputText} onChange={handleChanges} />
        <button type='text'>Add Todo</button>
        <button onClick={clearComplete}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
