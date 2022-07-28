import { ReactNode } from "react";
import "./NextTurn.css";

type Props = {
  text: string;
  children: ReactNode;
  fn?: () => any;
};

export const NextTurn = ({ text, children, fn }: Props) => {
  return (
    <section className="next-turn">
      <div className="play-area">
        <h1>Vez do {text}</h1>
        {fn && <button onClick={fn}>Escolher Outro</button>}
        {children}
      </div>
    </section>
  );
};
