const axios = require('axios');
const Article = require('../models/Article');

const getNews = async (req, res) => {
    const { q, lang, country, max, page } = req.query;

    try {
        const response = await axios.get('https://gnews.io/api/v4/search', {
            params: {
                q: q || 'latest',      // Default search query
                lang: lang || 'en',     // Language filter
                country: country || 'us', // Country filter
                max: max || 10,         // Number of results
                page: page || 1,        // Pagination
                apikey: process.env.GNEWS_API_KEY
            }
        });

        // Create Article instances
        const articles = response.data.articles.map(article => 
            new Article(
                article.title,
                article.description,
                article.url,
                article.image,
                article.publishedAt
            )
        );

        res.status(200).json({ articles });
    } catch (error) {
        console.error('Error fetching news:', error);
        if (error.response && error.response.status === 401) {
            res.status(401).json({ message: 'Invalid API key' });
        } else {
            res.status(500).json({ message: 'Failed to fetch news' });
        }
    }
};

module.exports = { getNews };
