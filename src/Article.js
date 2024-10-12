import './HomePage.css';

function Article({ article, index }) {
    return (
        <div className="article-card">
            <div className="tittle_div">
            <span className="index">{index + 1}</span> 
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="tittle">
                    {article.title}
                </a>
            </div>
            <p className="category"><strong>Category:</strong> {article.category}</p>
            <p className="publish"><strong>Published on:</strong> {new Date(article.published_at).toLocaleString()}</p>
            <p className="news">{article.news}</p>
            <hr />
        </div>
    );
}

export default Article;
