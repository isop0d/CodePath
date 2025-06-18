import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { authorList } from "./assets/data";

function App() {
  const [currentnum, setCurrentnum] = useState(0);
  const [flipped, setFlipped] = useState(false);

  let author = authorList[currentnum];

  const handleclick = (direction) => {
    setFlipped(false);
    setCurrentnum((prev) => {
      let next = prev + direction;
      if (next < 0 || next >= authorList.length) return prev;
      return next;
    });
  };
  return (
    <div className="core">
      <h2>Guess who said it!</h2>
      <h3>How well do you know influential minds of philosophy/literature </h3>
      <h4>10 Quotes!</h4>
      <div className="card" onClick={() => setFlipped(!flipped)}>
        <h3>{flipped ? author.author : `"${author.quote}"`}</h3>
      </div>
      <button onClick={() => handleclick(-1)}>Previous</button>
      <button onClick={() => handleclick(+1)}>Next</button>
    </div>
  );
}

export default App;
