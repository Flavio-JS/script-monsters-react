import { ReactNode } from "react";
import "./HowToPlay.css";

type Props = {
  children: ReactNode;
};

export const HowToPlay = ({ children }: Props) => {
  return (
    <section className="how-to-play">
      <div className="play-area">
        <h2>Como Jogar</h2>
        <ul>
          <li>Necessário 2 jogadores</li>
          <li>Cada jogador escolha seu ScriptMonster</li>
          <li>Durante o jogo e durante seu turno, escolha uma das 3 ações</li>
          <li>
            <ul id="how-to-play-skills">
              Cada ScriptMonster tem 3 habilidades
              <li>Mordida (ataque neutro)</li>
              <li>Skill (ataque elemental)</li>
              <li>Curar (cura HP)</li>
            </ul>
          </li>
        </ul>
        {children}
      </div>
    </section>
  );
};
