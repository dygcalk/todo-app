import { useState } from 'react';
import TodoList from './TodoList';

function Footer({ todos, setTodos, setFilter }) {
  const deleteItems = () => {
    const filtered = todos.filter((todo) => todo.completed !== true);
    setTodos(filtered);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todos.filter((todo) => todo.completed !== true).length}
        </strong>
        "items left"
      </span>
      <ul className="filters">
        <li>
          <a onClick={() => setFilter(0)} className="selected">
            All
          </a>
          <a onClick={() => setFilter(1)}>Active</a>
          <a onClick={() => setFilter(2)}>Completed</a>
        </li>
        <button onClick={deleteItems} className="clear-completed">
          Clear Completed
        </button>
      </ul>
    </footer>
  );
}

export default Footer;
