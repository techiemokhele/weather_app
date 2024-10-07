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

export interface WeatherData {
  uvi: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    uvi: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface BottomSectionComponentProps {
  dark: boolean;
}

export interface ForecastComponentProps {
  dark: boolean;
  data: WeatherData[];
}

export interface ForecastHourlyComponentProps {
  dark: boolean;
  data: WeatherData[];
}

export interface ButtonComponentProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  dark: boolean;
}
