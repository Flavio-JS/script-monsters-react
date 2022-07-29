import "./Alert.css";

type Props = {
  text: string;
};

export const Alert = ({ text }: Props) => {
  return <div className="alert">{text}</div>;
};
