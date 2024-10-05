"use client";

import { useState } from "react";
import { TopBarComponent } from "@/components";

export default function WeatherApp() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen ${
        !dark
          ? "bg-gradient-to-r from-dark-1 to-black text-white"
          : "bg-gradient-to-r from-dark-2 to-dark-1 text-black"
      }`}
    >
      <TopBarComponent dark={dark} setDark={setDark} />
    </div>
  );
}
