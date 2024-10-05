"use client";

import { useState } from "react";
import {
  BottomSectionComponent,
  MiddleSectionComponent,
  TopBarComponent,
} from "@/components";

export default function WeatherApp() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-2 min-h-screen ${
        !dark
          ? "bg-gradient-to-r from-dark-1 to-black text-white"
          : "bg-gradient-to-r from-dark-2 to-dark-1 text-black"
      }`}
    >
      <TopBarComponent dark={dark} setDark={setDark} />
      <MiddleSectionComponent dark={dark} />
      <BottomSectionComponent dark={dark} />
    </div>
  );
}
