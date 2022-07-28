import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HowToPlay } from "./components/HowToPlay/HowToPlay";
import { Button } from "./components/Button/Button";
import { ChooseMonster } from "./components/ChooseMonster/ChooseMonster";
import { playerStatus } from "./Types/playerStatus";
import { NextTurn } from "./components/NextTurn/NextTurn";

import "./App.css";

function App() {
  let [howToPlay, setHowToPlay] = useState(true);
  let [player1ChooseMonster, setPlayer1ChooseMonster] = useState(false);
  let [player2Turn, setPlayer2Turn] = useState(false);
  let [player2ChooseMonster, setPlayer2ChooseMonster] = useState(false);
  let [battleTime, setBattleTime] = useState(false);
  let [player1, setPlayer1] = useState({
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
  });
  let [player2, setPlayer2] = useState({
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
  });

  let passHowToPlay = () => {
    setHowToPlay(false);
    setPlayer1ChooseMonster(true);
  };
  let choicePlayer1 = (e: playerStatus) => {
    setPlayer1ChooseMonster(false);
    setPlayer1(e);
    setPlayer2Turn(true);
  };
  let passChoiceMonster = () => {
    setPlayer2Turn(false);
    setPlayer2ChooseMonster(true);
  };
  let changeChoiceP1 = () => {
    setPlayer1ChooseMonster(true);
    setPlayer2Turn(false);
  };
  let choicePlayer2 = (e: playerStatus) => {
    setPlayer2ChooseMonster(false);
    setPlayer2(e);
    setBattleTime(true);
  };
  let backToHowToPlay = () => {
    setPlayer1ChooseMonster(false);
    setPlayer2ChooseMonster(false);
    setHowToPlay(true);
  };

  let textButtonHowToPlay: string = "Próximo";
  let textButtonBack: string = "Voltar";
  let textButtonNextTurn: string = "Passar";

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

  console.log(`Player1\n
    ID: ${player1.ID}\n
  `);

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
          text="Player 1"
          monsters={[fireMonsterStatus, iceMonsterStatus, aquaMonsterStatus]}
          choiceFn={choicePlayer1}
        >
          <Button text={textButtonBack} clickfn={backToHowToPlay} />
        </ChooseMonster>
      )}
      {player2Turn && (
        <NextTurn text="Player 2" fn={changeChoiceP1}>
          <Button text={textButtonNextTurn} clickfn={passChoiceMonster} />
        </NextTurn>
      )}
      {player2ChooseMonster && (
        <ChooseMonster
          player={player2}
          text="Player 2"
          monsters={[fireMonsterStatus, iceMonsterStatus, aquaMonsterStatus]}
          choiceFn={choicePlayer2}
        >
          <Button text={textButtonBack} clickfn={backToHowToPlay} />
        </ChooseMonster>
      )}
      {battleTime && <div>ble ble</div>}
    </div>
  );
}

export default App;
