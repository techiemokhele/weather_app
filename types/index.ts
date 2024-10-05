import { Dispatch, SetStateAction } from "react";

export interface TopBarComponentProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

export interface ToggleModeComponentProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

export interface LocationSearchComponentProps {
  dark: boolean;
}

export interface ButtonComponentProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  dark: boolean;
}
