import "./Button.css";

type Props = {
  text: string;
  clickfn: () => any;
};

export const Button = ({ text, clickfn }: Props) => {
  return <button onClick={clickfn}>{text}</button>;
};
