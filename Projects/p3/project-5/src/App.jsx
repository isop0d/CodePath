import { useState } from "react";
import "./App.css";

function App() {
  const [dogData, setDogData] = useState(null);
  const [banList, setBanList] = useState([]);

  const toggleBan = (value) => {
    setBanList((prev) =>
      prev.includes(value)
        ? prev.filter((items) => item !== value)
        : [...prev, value]
    );
  };

  const parseBreedFromUrl = (url) => {
    const match = url.match(/breeds\/([^\/]+)\//);
    if (!match) return { breed: "Uknown", subBreed: "None" };

    const parts = match[1].split("-");
    return {
      breed: parts[0],
      subBreed: parts[1],
    };
  };

  const fetchDog = async () => {
    let dog;
    let parsed;

    const result = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await result.json();
    const imageUrl = data.message;

    parsed = parseBreedFromUrl(imageUrl);
    dog = { ...parsed, image: imageUrl };

    setDogData(dog);
    return dog;
  };

  return (
    <div>
      <h2>Discover Dogs!</h2>
      <h3>click the button to start</h3>
      <button onClick={fetchDog}>Click Me</button>
      {dogData && (
        <div>
          <h4 onClick={() => toggleBan(dogData.breed)}>
            Breed: {dogData.breed}
          </h4>
          <h4 onClick={() => toggleBan(dogData.subBreed)}>
            Sub-breed: {dogData.subBreed || "None"}
          </h4>
          <img src={dogData.image} alt="Dog" width="300" />
        </div>
      )}
      {banList.length > 0 && (
  <div>
    <h3>Ban List</h3>
    <ul>
      {banList.map((item) => (
        <li key={item} onClick={() => toggleBan(item)}>
          ❌ {item}
        </li>
      ))}
    </ul>
  </div>
)}
  
    </div>
  );
}

export default App;
