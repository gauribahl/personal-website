const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3005;

// Serve static files from the main directory
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});