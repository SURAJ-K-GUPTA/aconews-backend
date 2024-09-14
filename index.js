require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./src/routes/newsRoutes');

const app = express();
app.use(express.json());

// Allow all CORS requests
app.use(cors());  // This allows requests from any origin

// Optional: Handle preflight requests
app.options('*', cors());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Mount routes
app.use('/api/news', newsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

