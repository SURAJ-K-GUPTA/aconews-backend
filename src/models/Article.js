// src/models/Article.js

class Article {
    constructor(title, description, url, image, publishedAt) {
      this.title = title;
      this.description = description;
      this.url = url;
      this.image = image;
      this.publishedAt = publishedAt;
    }
  }
  
  module.exports = Article;
  