import data from './processed_news.json';
import HomePage from './HomePage.js';
import Article from './Article.js';
import './App.css';

function App() {
  return (
    <div className="top">
      {/* Render HomePage */}
      <HomePage />
      
      {/* Render the list of articles */}
      <div className="next">
        {data.map((article, index) => (
          <Article key={index} article={article} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
