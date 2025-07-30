import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/HomePage";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import Detail from "./pages/Detail"; // Added detail page
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/crewmate/:uuid" element={<Detail />} /> {/* New detail page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
