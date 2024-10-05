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

export interface BottomSectionComponentProps {
  dark: boolean;
}

export interface ForecastDataProps {
  id: number;
  image: string;
  temperature: string;
  day: string;
}

export interface ForecastComponentProps {
  dark: boolean;
  data: ForecastDataProps[];
}

export interface ButtonComponentProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  dark: boolean;
}
