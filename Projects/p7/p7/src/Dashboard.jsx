import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell
} from "recharts";

function Dashboard() {
  const [anime, setAnime] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTopAnime = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=${filter}`);
      const data = await res.json();
      setAnime(data.data);
    };
    fetchTopAnime();
  }, [filter]);

  const filteredAnime = anime.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const genreCount = {};
  anime.forEach((a) => {
    a.genres?.forEach((g) => {
      genreCount[g.name] = (genreCount[g.name] || 0) + 1;
    });
  });
  const genreChartData = Object.entries(genreCount).map(([name, count]) => ({ name, value: count }));

  const scoreChartData = anime.map(a => ({
    name: a.title.length > 20 ? a.title.slice(0, 20) + "…" : a.title,
    score: a.score
  })).slice(0, 10);

  return (
    <div className="Dashboard">
      <h1>Top Anime Dashboard</h1>
      <input
        placeholder="Search title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setFilter("Airing")}>Airing</button>
      <button onClick={() => setFilter("bypopularity")}>Popular</button>
      <button onClick={() => setFilter("Upcoming")}>Upcoming</button>

      <ul>
        {filteredAnime.map((item) => (
          <li key={item.mal_id}>
            <Link to={`/anime/${item.mal_id}`}>{item.title}</Link> ({item.score})
          </li>
        ))}
      </ul>

      <h2>Score Chart (Top 10)</h2>
      <BarChart width={600} height={300} data={scoreChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="score" fill="#8884d8" />
      </BarChart>

      <h2>Genre Breakdown</h2>
      <PieChart width={400} height={300}>
        <Pie data={genreChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {genreChartData.map((_, i) => <Cell key={i} fill={["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"][i % 4]} />)}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Dashboard;
