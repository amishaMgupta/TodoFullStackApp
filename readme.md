# full stack Todo Application
1. create a folder with name todofullstack
2. inside this folder create :-
    a. backend forlder
    b todoui (React typescript application)
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
   i. test the api in postmen