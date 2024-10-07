"use client";

import { useState } from "react";
import {
  BottomSectionComponent,
  MiddleSectionComponent,
  TopBarComponent,
} from "@/components";

export default function WeatherApp() {
  const [dark, setDark] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div
      className={`flex flex-col gap-2 min-h-screen ${
        dark
          ? "bg-gradient-to-r from-dark-2 to-dark-1 text-black"
          : "bg-gradient-to-r from-dark-1 to-black text-white"
      }`}
    >
      <TopBarComponent
        dark={dark}
        setDark={setDark}
        onCitySelect={handleCitySelect}
      />
      <MiddleSectionComponent dark={dark} city={selectedCity} onCitySelect={handleCitySelect} />
      <BottomSectionComponent dark={dark} />
    </div>
  );
}
