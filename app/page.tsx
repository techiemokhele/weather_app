"use client";

import { useState } from "react";
import { TopBarComponent } from "@/components";

export default function WeatherApp() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen ${
        !dark
          ? "bg-gradient-to-r from-[#444444] to-black text-white"
          : "bg-gradient-to-r from-[#D9D9D9] to-[#444444] text-black"
      }`}
    >
      <TopBarComponent dark={dark} setDark={setDark} />
    </div>
  );
}
