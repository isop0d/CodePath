import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 Crewmates</h2>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/create">➕ Create</Link></li>
        <li><Link to="/gallery">🖼️ Gallery</Link></li>
      </ul>
    </nav>
  );
}
