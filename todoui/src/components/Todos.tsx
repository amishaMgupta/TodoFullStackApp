import { useEffect,useState } from 'react';
import getTodos from '../service/todoservice.ts'
import type { Todo } from '../model/todo.ts';
import TodoCard from './Todo.tsx';

function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
   getTodos().then((todos) => {
    setTodos(todos);
    })  
  }, []);

  return (
    <div className="todo">

      // TODO: Add a form to create new todo and a button
      // send the data to service
      // service will call backend API to create a new todo
      // on backend. call json server to push the data in the db.json file. 



      <h2>Todo List</h2>
      {/* Todo list content will go here */}
        {todos.map((todo) => (
         <TodoCard key={todo.id} todo={todo} />
        ))}
    </div>
  );
}

export default Todos;