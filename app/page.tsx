"use client";

import { useState } from "react";
import { MiddleSectionComponent, TopBarComponent } from "@/components";

export default function WeatherApp() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-4 min-h-screen ${
        !dark
          ? "bg-gradient-to-r from-dark-1 to-black text-white"
          : "bg-gradient-to-r from-dark-2 to-dark-1 text-black"
      }`}
    >
      <TopBarComponent dark={dark} setDark={setDark} />
      <MiddleSectionComponent dark={dark} />
    </div>
  );
}
