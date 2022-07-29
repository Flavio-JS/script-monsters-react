import { useState } from "react";
import { playerStatus } from "../../Types/playerStatus";
import { Alert } from "../Alert/Alert";
import "./BattleTime.css";

type Props = {
  player: playerStatus;
  enemy: playerStatus;
  text: string;
  turn: number;
  log1: string;
  log2: string;
  fn: () => any;
  fnLog: (
    turn: number,
    log1: string,
    log2: string,
    updateImgP1: number,
    updateImgP2: number
  ) => any;
  fnWin: (text: string) => any;
  statusImgP1: string[];
  statusImgP2: string[];
  statusImgP1Position: number;
  statusImgP2Position: number;
};

export const BattleTime = ({
  player,
  text,
  enemy,
  turn,
  log1,
  log2,
  fn,
  fnLog,
  statusImgP1,
  statusImgP2,
  statusImgP1Position,
  statusImgP2Position,
  fnWin,
}: Props) => {
  let [staminaAlert, setStaminaAlert] = useState(false);
  let [healAlert, setHealStaminaAlert] = useState(false);
  let [action, setAction] = useState(1);

  const onClickBite = () => {
    if (action === 1) {
      bite();
      setAction(0);
      turn++;
      fnLog(turn, log1, log2, statusImgP1Position, statusImgP2Position);
      if (enemy.HP <= 0) {
        enemy.HP = 0;
        setTimeout(() => {
          fnWin(text);
        }, 3000);
      } else {
        setTimeout(() => {
          fn();
        }, 2000);
      }
    }
  };
  const bite = () => {
    let hitChanceDice = Math.floor(Math.random() * 100);
    let criticalChanceDice = Math.floor(Math.random() * 100);

    if (hitChanceDice > enemy.EsquivaChance) {
      if (criticalChanceDice <= player.CritChance) {
        enemy.HP = enemy.HP - player.NormalAtk * 1.5;
        player.Stamina = player.Stamina + 50;
        if (player.Stamina > 100) {
          player.Stamina = 100;
        }
        if (text === "Player 1") {
          log1 = `Você acertou um CRÍTICO e causou ${
            player.NormalAtk * 1.5
          } de dano`;
          log2 = `Você sofreu um CRÍTICO e sofreu ${
            player.NormalAtk * 1.5
          } de dano`;
        } else {
          log2 = `Você acertou um CRÍTICO e causou ${
            player.NormalAtk * 1.5
          } de dano`;
          log1 = `Você sofreu um CRÍTICO e sofreu ${
            player.NormalAtk * 1.5
          } de dano`;
        }
      } else {
        enemy.HP = enemy.HP - player.NormalAtk;
        player.Stamina = player.Stamina + 50;
        if (player.Stamina > 100) {
          player.Stamina = 100;
        }

        if (text === "Player 1") {
          log1 = `Você acertou um ataque normal e causou ${player.NormalAtk} de dano`;

          log2 = `Você sofreu um ataque normal e sofreu ${player.NormalAtk} de dano`;
        } else {
          log2 = `Você acertou um ataque normal e causou ${player.NormalAtk} de dano`;

          log1 = `Você sofreu um ataque normal e sofreu ${player.NormalAtk} de dano`;
        }
      }
      if (text === "Player 1") {
        statusImgP1Position = 0;
        statusImgP2Position = 4;
      } else {
        statusImgP2Position = 0;
        statusImgP1Position = 4;
      }
      /*
          0-biting 1-lost 2-normal 3-skill 4-take-damage
        */
    } else {
      enemy.Stamina = enemy.Stamina + 25;
      if (enemy.Stamina > 100) {
        enemy.Stamina = 100;
      }

      if (text === "Player 1") {
        log1 = `O inimigo ESQUIVOU do seu ataque`;
        log2 = `Você ESQUIVOU do ataque inimigo`;
      } else {
        log2 = `O inimigo ESQUIVOU do seu ataque`;
        log1 = `Você ESQUIVOU do ataque inimigo`;
      }

      if (text === "Player 1") {
        statusImgP1Position = 0;
        statusImgP2Position = 2;
      } else {
        statusImgP2Position = 0;
        statusImgP1Position = 2;
      }
      /*
          0-biting 1-lost 2-normal 3-skill 4-take-damage
        */
    }
  };

  const onClickSkill = () => {
    if (action === 1) {
      if (player.Stamina === 100) {
        skill();
        setAction(0);
        turn++;
        fnLog(turn, log1, log2, statusImgP1Position, statusImgP2Position);
        if (enemy.HP <= 0) {
          setTimeout(() => {
            fn();
          }, 2000);
        }
      } else {
        setStaminaAlert(true);
        setTimeout(() => {
          setStaminaAlert(false);
        }, 2000);
      }
    }
  };
  const skill = () => {
    let hitChanceDice = Math.floor(Math.random() * 100);
    let criticalChanceDice = Math.floor(Math.random() * 100);

    player.Stamina = 0;

    if (hitChanceDice > enemy.EsquivaChance) {
      if (criticalChanceDice <= player.CritChance) {
        if (player.Forte === enemy.ID) {
          enemy.HP = enemy.HP - player.SkillAtk * 1.5 * 1.05;

          if (text === "Player 1") {
            log1 = `Você acertou uma SKILL CRÍTICA e causou ${
              player.SkillAtk * 1.5 * 1.05
            } de dano`;

            log2 = `Você sofreu uma SKILL CRÍTICO e sofreu ${
              player.SkillAtk * 1.5 * 1.05
            } de dano`;
          } else {
            log2 = `Você acertou uma SKILL CRÍTICA e causou ${
              player.SkillAtk * 1.5 * 1.05
            } de dano`;

            log1 = `Você sofreu uma SKILL CRÍTICO e sofreu ${
              player.SkillAtk * 1.5 * 1.05
            } de dano`;
          }
        } else {
          enemy.HP = enemy.HP - player.SkillAtk * 1.5;

          if (text === "Player 1") {
            log1 = `Você acertou uma SKILL e causou ${
              player.SkillAtk * 1.5
            } de dano`;

            log2 = `Você sofreu uma SKILL e sofreu ${
              player.SkillAtk * 1.5
            } de dano`;
          } else {
            log2 = `Você acertou uma SKILL e causou ${
              player.SkillAtk * 1.5
            } de dano`;

            log1 = `Você sofreu uma SKILL e sofreu ${
              player.SkillAtk * 1.5
            } de dano`;
          }
        }
      } else {
        if (player.Forte === enemy.ID) {
          enemy.HP = enemy.HP - player.SkillAtk * 1.05;

          if (text === "Player 1") {
            log1 = `Você acertou uma SKILL e causou ${
              player.SkillAtk * 1.05
            } de dano`;

            log2 = `Você sofreu uma SKILL e sofreu ${
              player.SkillAtk * 1.05
            } de dano`;
          } else {
            log2 = `Você acertou uma SKILL e causou ${
              player.SkillAtk * 1.05
            } de dano`;

            log1 = `Você sofreu uma SKILL e sofreu ${
              player.SkillAtk * 1.05
            } de dano`;
          }
        } else {
          enemy.HP = enemy.HP - player.SkillAtk;

          if (text === "Player 1") {
            log1 = `Você acertou uma SKILL e causou ${player.SkillAtk} de dano`;
            log2 = `Você sofreu uma SKILL e sofreu ${player.SkillAtk} de dano`;
          } else {
            log2 = `Você acertou uma SKILL e causou ${player.SkillAtk} de dano`;
            log1 = `Você sofreu uma SKILL e sofreu ${player.SkillAtk} de dano`;
          }
        }
      }
      if (text === "Player 1") {
        statusImgP1Position = 3;
        statusImgP2Position = 4;
      } else {
        statusImgP2Position = 3;
        statusImgP1Position = 4;
      }
      /*
          0-biting 1-lost 2-normal 3-skill 4-take-damage
        */
    } else {
      enemy.Stamina = enemy.Stamina + 25;
      if (enemy.Stamina > 100) {
        enemy.Stamina = 100;
      }

      if (text === "Player 1") {
        log1 = `O inimigo ESQUIVOU do seu ataque`;
        log2 = `Você ESQUIVOU do ataque inimigo`;
      } else {
        log2 = `O inimigo ESQUIVOU do seu ataque`;
        log1 = `Você ESQUIVOU do ataque inimigo`;
      }

      if (text === "Player 1") {
        statusImgP2Position = 2;
      } else {
        statusImgP1Position = 2;
      }
      /*
        0-biting 1-lost 2-normal 3-skill 4-take-damage
      */
    }
    if (text === "Player 1") {
      statusImgP1Position = 3;
    } else {
      statusImgP2Position = 3;
    }
    /*
      0-biting 1-lost 2-normal 3-skill 4-take-damage
    */
  };

  const onClickHeal = () => {
    if (action === 1) {
      if (player.Stamina >= 25 && player.HP < 1000) {
        heal();
        setAction(0);
        turn++;
        fnLog(turn, log1, log2, statusImgP1Position, statusImgP2Position);
        setTimeout(() => {
          fn();
        }, 2000);
      } else {
        setHealStaminaAlert(true);
        setTimeout(() => {
          setHealStaminaAlert(false);
        }, 2000);
      }
    }
  };
  const heal = () => {
    player.Stamina = player.Stamina - 25;
    if (player.HP + player.Cura > 1000) {
      player.HP = player.HP + player.Cura;
      player.HP = 1000;
    } else {
      player.HP = player.HP + player.Cura;
    }

    if (text === "Player 1") {
      log1 = `Você curou ${player.Cura} de HP`;
      log2 = `Inimigo curou ${player.Cura} de HP`;
    } else {
      log2 = `Você curou ${player.Cura} de HP`;
      log1 = `Inimigo curou ${player.Cura} de HP`;
    }

    statusImgP1Position = 2;
    statusImgP2Position = 2;
    /*
      0-biting 1-lost 2-normal 3-skill 4-take-damage
    */
  };

  return (
    <div className="play-area">
      {staminaAlert && <Alert text="Você não tem Stamina" />}
      {healAlert && (
        <Alert text="Você não tem Stamina ou seu HP já está em 100%" />
      )}
      <section className="battle-time">
        <div className="battle-time-play-items">
          <h2>{text}</h2>
          {text === "Player 1" && (
            <div
              className="battle-time-monster-img"
              style={{
                backgroundImage: `url(${player.ImgsDirectory}${statusImgP1[statusImgP1Position]}.png)`,
              }}
            ></div>
          )}
          {text === "Player 2" && (
            <div
              className="battle-time-monster-img"
              style={{
                backgroundImage: `url(${player.ImgsDirectory}${statusImgP2[statusImgP2Position]}.png)`,
              }}
            ></div>
          )}

          <div className="battle-time-status">
            <div className="battle-time-status-hp">
              <i>HP: {player.HP}/1000</i>
              <div className="battle-time-status-border-bar-hp">
                <div
                  className="battle-time-status-bar-hp"
                  style={{
                    width: `${(player.HP / 1000) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="battle-time-status-stamina">
              <i>Stamina: {player.Stamina}/100</i>
              <div className="battle-time-status-border-bar-stamina">
                <div
                  className="battle-time-status-bar-stamina"
                  style={{
                    width: `${(player.Stamina / 100) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="battle-time-log">
            turno {turn}: {text === "Player 1" && <b>{log1}</b>}
            {text === "Player 2" && <b>{log2}</b>}
          </div>
          <div className="battle-time-actions">
            <button onClick={onClickBite}>Morder</button>
            <button onClick={onClickSkill}>Skill</button>
            <button onClick={onClickHeal}>Curar</button>
          </div>
        </div>
      </section>
    </div>
  );
};
