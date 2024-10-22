const express = require('express');
const app = express();
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
  const instance = process.env.INSTANCE || 'Web 1'; 
  res.send(`Hello, World! This is ${instance} responding.`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
