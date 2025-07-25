import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import DetailView from "./DetailView";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="AppLayout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/anime/:id" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
