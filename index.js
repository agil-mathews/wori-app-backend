const express = require('express');
const app = express();
const PORT = 4000;

// Middleware (optional)
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Hello from Express 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
