"use client";

import { useState } from "react";
import { GoDotFill } from "react-icons/go";

const ToggleModeComponent = () => {
  const [dark, setDark] = useState<boolean>(false);

  const handleToggle = () => {
    setDark(!dark);
  };

  return (
    <div className="flex flex-col items-center text-white text-[10px] md:text-md lg:text-lg gap-1">
      <div
        onClick={handleToggle}
        className={`flex items-center bg-gray-500 rounded-full w-16 h-5 px-1 ${
          dark ? "justify-start" : "justify-end"
        }`}
      >
        <GoDotFill size={22} color="#000" />
      </div>
      <p className="font-bold">{!dark ? "Dark" : "Light"} Mode</p>
    </div>
  );
};

export default ToggleModeComponent;
