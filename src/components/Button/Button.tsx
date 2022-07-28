import "./Button.css";

type Props = {
  text: string;
  clickfn: () => any;
};

export const Button = ({ text, clickfn }: Props) => {
  const handleClick = () => {
    clickfn();
  };

  return <button onClick={handleClick}>{text}</button>;
};
