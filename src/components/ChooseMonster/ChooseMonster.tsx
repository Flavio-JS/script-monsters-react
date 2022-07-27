import "./ChooseMonster.css";
import { ReactNode } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {
  children: ReactNode;
};

export const ChooseMonster = ({ children }: Props) => {
  return (
    <section className="choose-monster ">
      <div className="play-area">
        <h2>Escola seu ScriptMonster</h2>
        <div className="choose-monster-box-img">
          <BsFillArrowLeftCircleFill />
          <div className="monster-img"></div>
          <BsFillArrowRightCircleFill />
        </div>
        <div className="choose-monster-box-info">
          <h3>Status</h3>
          <ul>
            <li>HP: 2000</li>
            <li>Skill DMG: 200</li>
            <li>Mordida DMG: 100</li>
            <li>Cura: 80HP</li>
            <li>Forte Contra: ICE (Causa +5%DMG)</li>
            <li>Fraco Contra: Aqua (Recebe +5%DMG)</li>
            <li>Esquiva: 15% Chance de evitar DMG</li>
            <li>Critico: 50% Chance de causar 1.5 do DMG</li>
          </ul>
        </div>
        {children}
      </div>
    </section>
  );
};
