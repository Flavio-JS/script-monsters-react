import "./YouWin.css";

type Props = {
  text: string;
  player1Img: string;
  player2Img: string;
};

export const YouWin = ({ text, player1Img, player2Img }: Props) => {
  return (
    <section className="you-win">
      <div className="play-area">
        {text === "Player 1" && (
          <>
            <h1>{text} GANHOU !</h1>
            <div
              className="winer-img"
              style={{
                backgroundImage: `url(${player1Img}normal.png)`,
              }}
            ></div>
            <div
              className="loser-img"
              style={{
                backgroundImage: `url(${player2Img}lost.png)`,
              }}
            ></div>
          </>
        )}
        {text === "Player 2" && (
          <>
            <h1>{text} GANHOU !</h1>
            <div
              className="winer-img"
              style={{
                backgroundImage: `url(${player2Img}normal.png)`,
              }}
            ></div>
            <div
              className="loser-img"
              style={{
                backgroundImage: `url(${player1Img}lost.png)`,
              }}
            ></div>
          </>
        )}
        <a href="https://resilient-kitsune-190879.netlify.app/">
          JOGAR NOVAMENTE
        </a>
      </div>
    </section>
  );
};
