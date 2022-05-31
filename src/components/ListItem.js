import React, { useState } from 'react';

function ListItem({ todo, i, todos, setTodos, filter }) {
  const [isVisible, setIsVisible] = useState(false);
  const deleteTodo = (text) => {
    const filtered = todos.filter((item) => item.text !== text);
    setTodos(filtered);
  };
  if (isVisible && filter === 1) {
    return;
  }
  if (!isVisible && filter === 2) {
    return;
  }

  return (
    <li key={i} className={isVisible ? 'completed' : undefined}>
      <div className="view">
        <input
          type="checkbox"
          checked={todo?.completed || false}
          name={todo.text}
          onChange={() => setIsVisible(!isVisible)}
          className="toggle"
        />
        <label>
          <p className="todoList">{todo.text}</p>
        </label>
        <button
          onClick={(e) => {
            deleteTodo(todo.text);
          }}
          className="destroy"
        ></button>
      </div>
    </li>
  );
}

export default ListItem;
