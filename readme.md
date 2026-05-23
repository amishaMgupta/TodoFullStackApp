# full stack Todo Application
1. create a folder with name todofullstack
2. inside this folder create :-
   - a. backend forlder
   - b todoui (React typescript application)
## backend:-
  a. create package.json with npm init --y
  b. install nodemon,express
  c. create scripts
     "start": "nodemon app.js",
    "db": "json-server --watch ./db/db.json --port 3001"
  d. create db.json inside db folder. 
  e. create Todo Router code  :- 
        const express = require('express');
        const router = express.Router();

        router.get('/', (req, res) => {
            res.send('Welcome to the Todo API');
        });

        module.exports = router;
  f. use this router in app.js
        const express = require('express');
        const app = express();
        const PORT = 3000;
        // using router in app.js
        const todoRouter = require('./routers/todoRouter');

        app.use('/api/todos', todoRouter);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }) 
   g. test your api in postmen.
   h. create api call the json data and connec the code with JSON server
   i. start Jsonserver:-  using npm run db
   i. test the api in postmen.
# UI
  a. create components :- Login and Todo components
  b. install react-router-dom
  c. edit Main.tsx code :- import {BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
 d. todo:- 
 function Todo() {
  return (
    <div className="todo">
      <h2>Todo List</h2>
      {/* Todo list content will go here */}
    </div>
  );
}

export default Todo;
    e. function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
f. app.tsx

import { Route,Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/todo" element={<Todo />} />
    </Routes>
      
    </>
  )
}

export default App

