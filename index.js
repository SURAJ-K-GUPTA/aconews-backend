require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const newsRoutes = require('./src/routes/newsRoutes');

const app = express();
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000', 'https://aconewssuraj.web.app']  // This allows requests only from the frontend
  }));
  

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

