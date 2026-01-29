const express = require('express');
const mysql = require('mysql2');

const app = express();

// Connect to DB VM
const db = mysql.createConnection({
  host: '192.168.100.11',   // DB VM IP
  user: 'apiuser',
  password: 'password123',
  database: 'microservice_db'
});

// Test route
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Start server
app.listen(3000, () => {
  console.log('API running on port 3000');
});
