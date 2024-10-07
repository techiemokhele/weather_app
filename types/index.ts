import { Dispatch, SetStateAction } from "react";

export interface OpenCageResult {
  formatted: string;
}

export interface OpenCageData {
  results: OpenCageResult[];
}

export interface TopBarComponentProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  onCitySelect: (city: string) => void;
}

export interface ToggleModeComponentProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

export interface LocationSearchComponentProps {
  dark: boolean;
  city?: string;
  onCitySelect?: (city: string) => void;
}

export interface WeatherData {
  uvi: number;
  dt_txt: string;
  message: string;
  temperature: number;
  description: string;
  icon: string;
  formatted: string;
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

export interface CitySelectComponentProps {
  dark: boolean;
  onCitySelect: (city: string) => void;
}

export interface ButtonComponentProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  dark: boolean;
}
