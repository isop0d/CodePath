import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useLocation, useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [editId, setEditId] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're in edit mode
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const editUuid = params.get("edit");
    if (editUuid) {
      setEditId(editUuid);
      fetchCrewmate(editUuid);
    }
  }, [location]);

  async function fetchCrewmate(uuid) {
    const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("uuid", uuid)
      .single();
    if (error) console.error(error);
    else {
      setName(data.name);
      setColor(data.color);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !color) return;

    if (editId) {
      // Update existing crewmate
      const { error } = await supabase
        .from("crewmates")
        .update({ name, color })
        .eq("uuid", editId);

      if (error) console.error(error);
      else {
        alert("Crewmate updated!");
        navigate("/gallery");
      }
    } else {
      // Insert new crewmate
      const { error } = await supabase
        .from("crewmates")
        .insert([{ name, color }]);

      if (error) console.error(error);
      else {
        alert("Crewmate added!");
        setName("");
        setColor("");
        navigate("/gallery");
      }
    }
  }

  return (
    <div className="page-container">
      <h1>{editId ? "Edit Crewmate" : "Create a Crewmate"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Crewmate Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Select Color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
        </select>
        <button type="submit">{editId ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
