import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{ id: "t1", text: "Finish the course" }];

  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [ // to always update to the latest todo
      ...prevTodo,
      { id: Math.random().toString(), text },
    ]);
  };

  const deleteTodo = (id: string) => {
    const remainTodos = todos.filter(todo => todo.id !== id)
    setTodos(remainTodos)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
