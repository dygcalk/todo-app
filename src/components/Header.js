import React, { useEffect, useState } from 'react';

function Header({ setTodos, todos }) {
  const [inputText, setInputText] = useState('');
  const addTodos = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText('');
  };
  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTodos}>
        <input
          className="new-todo"
          autoFocus
          placeholder="What needs to be done?"
          value={inputText}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

export default Header;
