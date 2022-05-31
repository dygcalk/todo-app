import React, { useState } from 'react';
import ListItem from './ListItem';

function TodoList({ todos, setTodos, filter }) {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'toggle-all') {
      let checkedTodos = todos.map((todo) => {
        return { ...todos, text: todo.text, completed: checked };
      });
      setTodos(checkedTodos);
    } else {
      let checkedTodo = todos.map((todo) =>
        todo.text === name
          ? { ...todos, text: todo.text, completed: checked }
          : todo
      );
      setTodos(checkedTodo);
    }
  };

  return (
    <section className="main">
      <input
        className="toggle-all"
        name="toggle-all"
        type="checkbox"
        checked={todos.filter((todo) => todo?.completed !== true).length < 1}
        onChange={handleChange}
      />

      <ul className="todo-list">
        {todos.map((todo, i) => (
          <ListItem
            todo={todo}
            i={i}
            todos={todos}
            setTodos={setTodos}
            filter={filter}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
