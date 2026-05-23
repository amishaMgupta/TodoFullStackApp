const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const todoList = []
    // getting the data from JSON Server
    await fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => {
            todoList.push(...data);
            res.json(todoList);
        })
        .catch(error => res.status(500).json({ error: 'Failed to fetch todos' }));
});

module.exports = router;