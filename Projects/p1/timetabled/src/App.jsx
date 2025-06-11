import './App.css';
import Card from './components/Cards.jsx';

import KleinImg from './imageassets/Klein.jpg';
import AudreyImg from './imageassets/Audrey.jpg';
import AlgerImg from './imageassets/Alger.jpg';
import AmonImg from './imageassets/Amon.jpg';
import CattleyaImg from './imageassets/Cattleya.jpg';
import RoselleImg from './imageassets/Roselle.jpg';
import EmlynImg from './imageassets/Emlyn.jpg';
import AzikImg from './imageassets/Azik.jpg';
import LeonardImg from './imageassets/Leonard.jpg';
import ForsImg from './imageassets/Fors.jpg';

const App = () => {
  return (
    <div className="App">
      <h1 className="title">LOTM LORE</h1>
      <div className="card-grid">
        <Card
  title="Klein Moretti"
  imageUrl={KleinImg}
  info="Klein is the main protagonist of Lord of the Mysteries. After transmigrating into a steampunk world, he becomes a Beyonder and eventually takes on the identity of The Fool."
/>

<Card
  title="Audrey Hall"
  imageUrl={AudreyImg}
  info="Audrey is a noble lady and one of the earliest members of the Tarot Club. She follows the Pathway of the Spectator and is known as Justice within the club."
/>

<Card
  title="Alger Wilson"
  imageUrl={AlgerImg}
  info="Alger, known as The Hanged Man, is a seasoned sailor with deep connections in the Church of the Storm. He’s one of the earliest Tarot Club members."
/>

<Card
  title="Amon"
  imageUrl={AmonImg}
  info="Amon is a terrifyingly powerful Beyonder and one of the main antagonists. He's known for his mischievous nature and his monocle—and for always stealing identities."
/>

<Card
  title="Cattleya"
  imageUrl={CattleyaImg}
  info="Cattleya, also known as The Hermit, is a pirate admiral and scholar. She has deep ties to the Seer Pathway and a mysterious past with Roselle Gustav."
/>

<Card
  title="Roselle Gustav"
  imageUrl={RoselleImg}
  info="Roselle Gustav was the former Emperor and creator of the Tarot Cards. His legacy and diary play a crucial role in unraveling the world's secrets."
/>

<Card
  title="Emlyn White"
  imageUrl={EmlynImg}
  info="Emlyn is a proud Sanguine (vampire) and pharmacist. Despite his arrogance, he matures over time and becomes a key ally in the Tarot Club."
/>

<Card
  title="Azik Eggers"
  imageUrl={AzikImg}
  info="Azik is Klein's mysterious mentor who has connections to the Death Pathway. He’s wise, powerful, and seems to know much about the world’s hidden truths."
/>

<Card
  title="Leonard Mitchell"
  imageUrl={LeonardImg}
  info="Leonard is a Nightwatcher of the Church of Evernight and Klein’s former roommate. He shares his body with a poetic spirit that offers strange insights."
/>

<Card
  title="Fors Wall"
  imageUrl={ForsImg}
  info="Fors is a writer who accidentally becomes a Beyonder and is pulled into the Tarot Club. She explores the mysterious pathways of the Apprentice sequence."
/>
      </div>
    </div>
  );
};

export default App
