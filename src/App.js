import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [filter, setFilter] = useState(0);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <section className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <Footer todos={todos} setTodos={setTodos} setFilter={setFilter} />
    </section>
  );
}

export default App;
