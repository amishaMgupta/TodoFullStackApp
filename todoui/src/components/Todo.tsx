import { useEffect } from 'react';
import getTodos from '../service/todoservice.ts'

function Todos() {
  useEffect(() => {
   getTodos().then((todos) => {
      console.log(todos);
    })  
  }, []);

  return (
    <div className="todo">
      <h2>Todo List</h2>
      {/* Todo list content will go here */}
    </div>
  );
}

export default Todos;