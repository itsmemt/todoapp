import React from 'react';
import TodoList from './TodoList';
import "./todos.css"


const Todos = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      task: 'Practice HTML5',
      date: '01-01-2023',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Practice CSS3',
      date: '02-01-2023',
      isCompleted: false,
    },
    {
      id: 3,
      task: 'Learn React',
      date: '03-01-2023',
      isCompleted: false,
    },
    {
      id: 3,
      task: 'Learn JavaScript',
      date: '31-12-2022',
      isCompleted: true,
    },
  ]);
  const [input, setInput] = React.useState('');

  const handleAddTask = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task: input,
        date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        isCompleted: false,
      },
    ]);
    setInput('');
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: true,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div className='main-container'>
      <h1 className='header-text'>Todo App</h1>
      <div className='add-todo'>
        <input placeholder='Your Task' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className='pending-todos'>
        <h3 className='sub-heading'>Pending Tasks</h3>
        <TodoList todos={pendingTodos} onComplete={handleComplete} onDelete={handleDelete} />
      </div>

      <div className='completed-todos'>
        <h3 className='sub-heading'>Completed Tasks</h3>
        <TodoList todos={completedTodos} onComplete={handleComplete} onDelete={handleDelete} />
      </div>

    </div>
  );
};
export default Todos;