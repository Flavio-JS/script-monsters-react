import { useState } from "react";
import { Header } from "./components/Header/Header";
import { HowToPlay } from "./components/HowToPlay/HowToPlay";
import { Button } from "./components/Button/Button";
import { ChooseMonster } from "./components/ChooseMonster/ChooseMonster";
import { playerStatus } from "./Types/playerStatus";
import { NextTurn } from "./components/NextTurn/NextTurn";
import { BattleTime } from "./components/BattleTime/BattleTime";
import { YouWin } from "./components/YouWin/YouWin";

import "./App.css";

function App() {
  /* Use States */
  let [howToPlay, setHowToPlay] = useState(true);
  let [player1ChooseMonster, setPlayer1ChooseMonster] = useState(false);
  let [player2ChooseMonster, setPlayer2ChooseMonster] = useState(false);
  let [player1Turn, setPlayer1Turn] = useState(false);
  let [player2Turn, setPlayer2Turn] = useState(false);
  let [battleTimeP1, setBattleTimeP1] = useState(false);
  let [battleTimeP2, setBattleTimeP2] = useState(false);
  let [turn, setTurn] = useState(0);
  let [log1, setlog1] = useState("Começou o jogo");
  let [log2, setlog2] = useState("");
  let [statusImgP1Position, SetStatusImgP1Position] = useState(2);
  let [statusImgP2Position, SetStatusImgP2Position] = useState(2);
  let [winGame, setWinGame] = useState(false);
  let [winer, setWiner] = useState("");

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

  /* funções */

  let passHowToPlay = () => {
    setHowToPlay(false);
    setPlayer1ChooseMonster(true);
  };

  let choicePlayer1 = (monsterStatus: playerStatus) => {
    setPlayer1ChooseMonster(false);
    setPlayer1(monsterStatus);
    setPlayer2Turn(true);
  };

  let passChoiceMonsterP1 = () => {
    setPlayer2Turn(false);
    setPlayer2ChooseMonster(true);
  };
  let changeChoiceP1 = () => {
    setPlayer1ChooseMonster(true);
    setPlayer2Turn(false);
  };

  let choicePlayer2 = (monsterStaus: playerStatus) => {
    setPlayer2ChooseMonster(false);
    setPlayer2(monsterStaus);
    setPlayer1Turn(true);
  };

  let passChoiceMonsterP2 = () => {
    setPlayer1Turn(false);
    setBattleTimeP1(true);
  };
  let changeChoiceP2 = () => {
    setPlayer2ChooseMonster(true);
    setPlayer1Turn(false);
  };

  let backToHowToPlay = () => {
    setPlayer1ChooseMonster(false);
    setPlayer2ChooseMonster(false);
    setHowToPlay(true);
  };

  let battleTurnP1 = () => {
    setBattleTimeP1(false);
    setBattleTimeP2(true);
    console.log("clicou");
  };
  let battleTurnP2 = () => {
    setBattleTimeP2(false);
    setBattleTimeP1(true);
  };

  let setLogs = (
    turn: number,
    log1: string,
    log2: string,
    updateImgP1: number,
    updateImgP2: number
  ) => {
    setTurn(turn);
    setlog1(log1);
    setlog2(log2);
    SetStatusImgP1Position(updateImgP1);
    SetStatusImgP2Position(updateImgP2);
  };

  let fnWinGame = (winer: string) => {
    setBattleTimeP2(false);
    setBattleTimeP1(false);
    setWiner(winer);
    setWinGame(true);
  };

  /* variáveis */

  let textButtonHowToPlay = "Próximo";
  let textButtonBack = "Voltar";
  let textButtonNextTurn = "Passar";

  let statusImgP1 = [
    "biting",
    "lost",
    "normal",
    "skill-to-right",
    "take-damage",
  ];
  let statusImgP2 = [
    "biting",
    "lost",
    "normal",
    "skill-to-left",
    "take-damage",
  ];

  /* status */

  let fireMonsterStatus: playerStatus = {
    ID: "Fire",
    HP: 1000,
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
    HP: 1000,
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
    HP: 1000,
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
          text="Player 1"
          monsters={[fireMonsterStatus, iceMonsterStatus, aquaMonsterStatus]}
          choiceFn={choicePlayer1}
        >
          <Button text={textButtonBack} clickfn={backToHowToPlay} />
        </ChooseMonster>
      )}
      {player2Turn && (
        <NextTurn text="Player 2" fn={changeChoiceP1}>
          <Button text={textButtonNextTurn} clickfn={passChoiceMonsterP1} />
        </NextTurn>
      )}
      {player1Turn && (
        <NextTurn text="Player 1" fn={changeChoiceP2}>
          <Button text={textButtonNextTurn} clickfn={passChoiceMonsterP2} />
        </NextTurn>
      )}
      {player2ChooseMonster && (
        <ChooseMonster
          text="Player 2"
          monsters={[fireMonsterStatus, iceMonsterStatus, aquaMonsterStatus]}
          choiceFn={choicePlayer2}
        >
          <Button text={textButtonBack} clickfn={backToHowToPlay} />
        </ChooseMonster>
      )}
      {battleTimeP1 && (
        <BattleTime
          player={player1}
          enemy={player2}
          text="Player 1"
          turn={turn}
          log1={log1}
          log2={log2}
          fn={battleTurnP1}
          fnLog={setLogs}
          fnWin={fnWinGame}
          statusImgP1={statusImgP1}
          statusImgP2={statusImgP2}
          statusImgP1Position={statusImgP1Position}
          statusImgP2Position={statusImgP2Position}
        ></BattleTime>
      )}
      {battleTimeP2 && (
        <BattleTime
          player={player2}
          enemy={player1}
          text="Player 2"
          turn={turn}
          log1={log1}
          log2={log2}
          fn={battleTurnP2}
          fnLog={setLogs}
          fnWin={fnWinGame}
          statusImgP1={statusImgP1}
          statusImgP2={statusImgP2}
          statusImgP1Position={statusImgP1Position}
          statusImgP2Position={statusImgP2Position}
        ></BattleTime>
      )}
      {winGame && (
        <YouWin
          text={winer}
          player1Img={player1.ImgsDirectory}
          player2Img={player2.ImgsDirectory}
        />
      )}
    </div>
  );
}

export default App;
