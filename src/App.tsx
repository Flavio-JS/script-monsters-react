import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HowToPlay } from "./components/HowToPlay/HowToPlay";
import { Button } from "./components/Button/Button";
import { ChooseMonster } from "./components/ChooseMonster/ChooseMonster";
import { playerStatus } from "./Types/playerStatus";

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

  /* status */

  let fireMonsterStatus: playerStatus = {
    ID: "Fire",
    HP: 2000,
    Stamina: 0,
    SkillAtk: 200,
    NormalAtk: 100,
    Cura: 80,
    EsquivaChance: 15,
    CritChance: 50,
    ImgsDirectory: "/img/FireMonster/",
    Forte: "Ice",
    Fraco: "Aqua",
  };
  let aquaMonsterStatus: playerStatus = {
    ID: "Aqua",
    HP: 2000,
    Stamina: 0,
    SkillAtk: 200,
    NormalAtk: 100,
    Cura: 100,
    EsquivaChance: 15,
    CritChance: 40,
    ImgsDirectory: "/img/AquaMonster/",
    Forte: "Fire",
    Fraco: "Ice",
  };
  let iceMonsterStatus: playerStatus = {
    ID: "Ice",
    HP: 2000,
    Stamina: 0,
    SkillAtk: 200,
    NormalAtk: 100,
    Cura: 80,
    EsquivaChance: 20,
    CritChance: 40,
    ImgsDirectory: "/img/IceMonster/",
    Forte: "Aqua",
    Fraco: "Fire",
  };

  let player1: playerStatus = {
    ID: "player1",
    HP: 0,
    Stamina: 0,
    SkillAtk: 0,
    NormalAtk: 0,
    Cura: 0,
    EsquivaChance: 0,
    CritChance: 0,
    ImgsDirectory: "",
    Forte: "",
    Fraco: "",
  };
  let player2: playerStatus = {
    ID: "player2",
    HP: 0,
    Stamina: 0,
    SkillAtk: 0,
    NormalAtk: 0,
    Cura: 0,
    EsquivaChance: 0,
    CritChance: 0,
    ImgsDirectory: "",
    Forte: "",
    Fraco: "",
  };

  return (
    <div className="container">
      <Header></Header>
      {howToPlay && (
        <HowToPlay>
          <Button text={textButtonHowToPlay} clickfn={passHowToPlay} />
        </HowToPlay>
      )}
      {player1ChooseMonster && (
        <ChooseMonster
          player={player1}
          monsters={[fireMonsterStatus, iceMonsterStatus, aquaMonsterStatus]}
        >
          <Button text={textButtonBack} clickfn={backPlayer1ChooseMonster} />
          <Button text={textButtonChoose} clickfn={passPlayer1ChooseMonster} />
        </ChooseMonster>
      )}
    </div>
  );
}

export default App;
