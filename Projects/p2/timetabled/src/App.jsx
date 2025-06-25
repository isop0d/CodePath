import { useState } from "react";
import "./App.css";
import { authorList } from "./assets/data";

function App() {
  const [currentnum, setCurrentnum] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState(" ");

  let author = authorList[currentnum];

  const handleclick = (direction) => {
    setFlipped(false);
    setCurrentnum((prev) => {
      let next = prev + direction;
      // if (next < 0) {
      // maybe add something here to hide previous button
      // }
      if (next < 0 || next >= authorList.length) return prev;
      return next;
    });
  };

  const handleInput = (e) => setUserGuess(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userGuess.trim().toLowerCase() === author.author.toLowerCase()) {  
    alert("Correct!");
    } else {
    alert("Incorrect!");
    }
    setUserGuess("")
  };

  // return <input type='text' value={userGuess} onChange={handleInput}/> use this later

  return (
    <div className="core">
      <h2>Guess who said it!</h2>
      <h3>How well do you know influential minds of philosophy/literature </h3>
      <h4>10 Quotes!</h4>
      <div className="card" onClick={() => setFlipped(!flipped)}>
        <h3>{flipped ? author.author : `"${author.quote}"`}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input bar"
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="here"
        ></input>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => handleclick(-1)}>Previous</button>
      <button onClick={() => handleclick(+1)}>Next</button> 
    </div>
  );
}

export default App;
