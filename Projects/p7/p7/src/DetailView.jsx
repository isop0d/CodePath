import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DetailView() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      const data = await res.json();
      setAnime(data.data);
    };
    fetchAnime();
  }, [id]);

  if (!anime) return <p>Loading...</p>;

  return (
    <div className="DetailView">
      <h1>{anime.title}</h1>
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p><strong>Status:</strong> {anime.status}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis}</p>
    </div>
  );
}

export default DetailView;
