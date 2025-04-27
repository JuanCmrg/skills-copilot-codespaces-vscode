// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database for comments
let comments = [];

// Routes
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const { name, comment } = req.body;
  if (!name || !comment) {
    return res.status(400).send('Name and comment are required');
  }
  const newComment = { id: comments.length + 1, name, comment };
  comments.push(newComment);
  res.status(201).json(newComment);
});