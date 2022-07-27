import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HowToPlay } from "./components/HowToPlay/HowToPlay";
import { Button } from "./components/Button/Button";
import { ChooseMonster } from "./components/ChooseMonster/ChooseMonster";

import "./App.css";

function App() {
  let [howToPlay, setHowToPlay] = useState(true);
  let [player1ChooseMonster, setPlayer1ChooseMonster] = useState(false);

  let passHowToPlay = () => {
    setHowToPlay(false);
    setPlayer1ChooseMonster(true);
  };
  let passPlayer1ChooseMonster = () => {
    setPlayer1ChooseMonster(false);
  };
  let backPlayer1ChooseMonster = () => {
    setHowToPlay(true);
    setPlayer1ChooseMonster(false);
  };

  let textButtonHowToPlay: string = "Próximo";
  let textButtonChoose: string = "Escolher";
  let textButtonBack: string = "Voltar";

  return (
    <div className="container">
      <Header></Header>
      {howToPlay && (
        <HowToPlay>
          <Button text={textButtonHowToPlay} clickfn={passHowToPlay} />
        </HowToPlay>
      )}
      {player1ChooseMonster && (
        <ChooseMonster>
          <Button text={textButtonBack} clickfn={backPlayer1ChooseMonster} />
          <Button text={textButtonChoose} clickfn={passPlayer1ChooseMonster} />
        </ChooseMonster>
      )}
    </div>
  );
}

export default App;
