import React, { useState } from 'react';
import data from './processed_news.json';
import HomePage from './HomePage.js';
import Article from './Article.js';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to check if article title contains any of the search terms
  const matchesSearch = (articleTitle, searchTerms) => {
    return searchTerms.some(term =>
      articleTitle.toLowerCase().includes(term.trim().toLowerCase())
    );
  };

  // Split the searchTerm by commas, creating an array of search terms
  const searchTerms = searchTerm.split(',');

  // Filter articles based on the search terms
  const filteredArticles = searchTerm
    ? data.filter((article) =>
        matchesSearch(article.title, searchTerms)
      )
    : data; // Show all articles if searchTerm is empty

  return (
    <div className="top">
      {/* Render HomePage */}
      <HomePage />

      {/* Search bar */}
      <div className="search-div">
        <input
          type="text"
          placeholder="Search by title (separate terms with commas)..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Render the list of articles */}
      <div className="next">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <Article key={index} article={article} index={index} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
