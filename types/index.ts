export interface ButtonComponentProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  dark?: boolean;
}