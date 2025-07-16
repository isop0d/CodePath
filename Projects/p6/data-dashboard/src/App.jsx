import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [anime, setAnime] = useState([]);
  const [filter, setFilter] = useState("");
 const [searchTerm, setSearchTerm] = useState("");
 const [typeFilter, setTypeFilter] = useState("");

  const AnimeList = ({ anime }) => {
    return (
      <ol>
        {anime.map((item) => (
          <li key={item.mal_id}>
            <strong>{item.title}</strong> ({item.score})
          </li>
        ))}
      </ol>
    );
  };

  useEffect(() => {
    const baseUrl = "https://api.jikan.moe/v4/top/anime";
    const fullUrl = `${baseUrl}?filter=${filter}`;
    const fetchTopAnime = async () => {
      const res = await fetch(fullUrl);
      const data = await res.json();
      setAnime(data.data);
      console.log(data.data);
    };
    fetchTopAnime();
  }, [filter]);

  const filteredAnime = anime
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (typeFilter ? item.type === typeFilter : true));

 const scores = anime
    .map((item) => item.score)
    .filter((score) => score !== null && typeof score === "number");

 const totalCount = anime.length;
 const minScore = scores.length > 0 ? Math.min(...scores).toFixed(2) : "N/A";
 const maxScore = scores.length > 0 ? Math.max(...scores).toFixed(2) : "N/A";
  const meanScore =
    scores.length > 0
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
      : "N/A";

  return (
    <div className="App">
      <h1>Top Anime Dashboard</h1>

      {/* Summary Stats */}
      <div className="stats">
        <p><strong>Total:</strong> {totalCount}</p>
        <p><strong>Average Score:</strong> {meanScore}</p>
        <p><strong>Score Range:</strong> {minScore} – {maxScore}</p>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={() => setFilter("Airing")}>Airing</button>
      <button onClick={() => setFilter('bypopularity')}>
        By Popularity
      </button>
      <button onClick={() => setFilter('Upcoming')}>Upcoming</button>
      <button onClick={() => setFilter('')}>None</button>
      <div id="AnimeList"><AnimeList anime={filteredAnime}></AnimeList></div>
    </div>
  );
}

export default App;
