/* eslint-disable no-unused-vars -- Remove me */
import { useState } from 'react';
import PageTitle from './components/PageTitle';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { useTodos } from './components/useTodos';

export default function App() {
  // TODO: Use the custom hook here instead of state and functions
  const { addTodo, todos, error, isLoading, toggleCompleted } = useTodos();

  if (error) {
    console.error('Fetch error:', error);
    return <div>Error! {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          {isLoading && <div>Loading...</div>}
          {!isLoading && (
            <TodoList todos={todos} toggleCompleted={toggleCompleted} />
          )}
        </div>
      </div>
    </div>
  );
}
