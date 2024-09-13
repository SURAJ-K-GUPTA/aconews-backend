const express = require('express');
const { getNews } = require('../controllers/newsController');
const router = express.Router();

// Define route for getting news
router.get('/', getNews);

module.exports = router;
