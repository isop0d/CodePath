import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import "./Gallery.css";

export default function Gallery() {
  const [crew, setCrew] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function fetchCrewmates() {
    const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .order("time_made", { ascending: false });

    if (error) console.error(error);
    else setCrew(data);
  }

  async function handleDelete(uuid) {
    const confirmed = window.confirm("Are you sure you want to delete this crewmate?");
    if (!confirmed) return;

    const { error } = await supabase.from("crewmates").delete().eq("uuid", uuid);

    if (error) {
      console.error(error);
      alert("Error deleting crewmate!");
    } else {
      // Update state to remove deleted crewmate
      setCrew((prev) => prev.filter((c) => c.uuid !== uuid));
    }
  }

  return (
    <div className="page-container">
      <h1>Crewmate Gallery</h1>
      <div className="gallery-grid">
        {crew.map((c) => (
          <div key={c.uuid} className="crewmate-card">
            {/* Clickable card content (links to detail page) */}
            <Link to={`/crewmate/${c.uuid}`} className="card-link">
              <div
                className="color-bar"
                style={{ backgroundColor: c.color.toLowerCase() }}
              ></div>
              <div className="card-content">
                <h2>{c.name}</h2>
                <p style={{ color: c.color.toLowerCase() }}>{c.color}</p>
              </div>
            </Link>

            {/* Buttons row below the card */}
            <div className="button-row">
              <button onClick={() => navigate(`/create?edit=${c.uuid}`)}>✏️ Edit</button>
              <button className="delete" onClick={() => handleDelete(c.uuid)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
