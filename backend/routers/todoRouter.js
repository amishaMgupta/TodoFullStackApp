const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    const todoList = []
    await fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(data => {
            todoList.push(...data);
            res.json(todoList);
        })
        .catch(error => res.status(500).json({ error: 'Failed to fetch todos' }));
});

module.exports = router;