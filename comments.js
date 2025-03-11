// create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Use the comments module
app.use('/comments', comments);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});