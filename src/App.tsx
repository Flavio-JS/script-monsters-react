import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HowToPlay } from "./components/HowToPlay/HowToPlay";

import "./App.css";

function App() {
  let [howToPlay, setHTP] = useState(true);

  let textButton: string = "Próximo";
  return (
    <div className="container">
      <Header></Header>
      {howToPlay && (
        <HowToPlay>
          <button>Próximo</button>
        </HowToPlay>
      )}
    </div>
  );
}

export default App;
