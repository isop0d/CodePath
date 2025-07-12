import { useState } from 'react'
import './App.css'

function App() {
  const [dogData, setDogData] = useState(null)

  const parseBreedFromUrl = (url) => {
    const match = url.match(/breeds\/([^\/]+)\//);
    if (!match) return{ breed: 'Uknown', subBreed: 'None'}

    const parts = match[1].split('-');
    return{
      breed: parts[0],
      subBreed: parts[1],
    };
  };

  const fetchDog = async () => {
    let dog;
    let parsed;
    
    
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await result.json();
    const imageUrl = data.message;
    
    parsed = parseBreedFromUrl(imageUrl);
    dog = {...parsed, image: imageUrl};
    
    
    setDogData(dog)
    return dog
  }

  return (
    <div>
      <h2>Discover Dogs!</h2>
      <h3>click the button to start</h3>
      <button onClick={fetchDog()}></button>
    </div>
  )
}

export default App
