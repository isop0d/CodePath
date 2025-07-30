import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Detail() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmate();
  }, []);

  async function fetchCrewmate() {
    const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("uuid", uuid)
      .single();

    if (error) console.error(error);
    else setCrewmate(data);
  }

  if (!crewmate) return <div className="page-container"><p>Loading...</p></div>;

  return (
    <div className="page-container">
      <h1>{crewmate.name}</h1>
      <p style={{ color: crewmate.color.toLowerCase() }}>
        <strong>Color:</strong> {crewmate.color}
      </p>
      <p><strong>Time Created:</strong> {new Date(crewmate.time_made).toLocaleString()}</p>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => navigate(`/create?edit=${crewmate.uuid}`)}>✏️ Edit</button>
        <button style={{ marginLeft: "1rem" }} onClick={() => navigate("/gallery")}>
          🔙 Back to Gallery
        </button>
      </div>
    </div>
  );
}
