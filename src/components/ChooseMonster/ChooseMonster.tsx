import "./ChooseMonster.css";
import "../Button/Button.css";
import { ReactNode, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { playerStatus } from "../../Types/playerStatus";

type Props = {
  monsters: playerStatus[];
  text: string;
  choiceFn: (monster: playerStatus) => any;
  children: ReactNode;
};

export const ChooseMonster = ({
  children,

  text,
  monsters,
  choiceFn,
}: Props) => {
  let [counter, setCounter] = useState(0);

  const changeLeft = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const changeRight = () => {
    if (counter < monsters.length - 1) {
      setCounter(counter + 1);
    }
  };
  const choiceMonster = () => {
    //player = monsters[counter];
    choiceFn(monsters[counter]);
  };

  return (
    <section className="choose-monster ">
      <div className="play-area">
        <h2>{text} Escolha seu ScriptMonster </h2>
        <div className="choose-monster-box-img">
          <div className="choose-monster-arrows" onClick={changeLeft}>
            <BsFillArrowLeftCircleFill />
          </div>

          <div
            className="monster-img"
            style={{
              backgroundImage: `url(${monsters[counter].ImgsDirectory}/normal.png)`,
            }}
          ></div>

          <div className="choose-monster-arrows" onClick={changeRight}>
            <BsFillArrowRightCircleFill />
          </div>
        </div>
        <div className="choose-monster-box-info">
          {counter + 1}/{monsters.length}
          <h3>Status</h3>
          <ul>
            <li>
              Nome: <b>{monsters[counter].ID + "Monster"}</b>
            </li>
            <li>
              HP: <b>{monsters[counter].HP}</b>
            </li>
            <li>
              Skill DMG: <b>{monsters[counter].SkillAtk}</b>
            </li>
            <li>
              Mordida DMG: <b>{monsters[counter].NormalAtk}</b>
            </li>
            <li>
              Cura: <b>{monsters[counter].Cura}</b>HP
            </li>
            <li>
              Forte Contra: <b>{monsters[counter].Forte}</b> (Causa +5%DMG)
            </li>
            <li>
              Fraco Contra: <b>{monsters[counter].Fraco}</b> (Recebe +5%DMG)
            </li>
            <li>
              Esquiva: <b>{monsters[counter].EsquivaChance}</b>% Chance de
              evitar DMG
            </li>
            <li>
              Critico: <b>{monsters[counter].CritChance}</b>% Chance de causar
              1.5 do DMG
            </li>
          </ul>
        </div>
        {children}
        <button onClick={choiceMonster}>Escolher</button>
      </div>
    </section>
  );
};
