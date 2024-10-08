import React, { useState } from "react";
import { CitySelectComponentProps } from "@/types";

const cities = ["Springs", "Johannesburg", "Cape Town", "Durban", "Pretoria"];

const CitySelectComponent = ({ dark, onCitySelect }: CitySelectComponentProps) => {
  const [selectedCity, setSelectedCity] = useState<string>(cities[0]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    onCitySelect(city);
  };

  return (
    <div className={`flex flex-col mb-4 ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}`}>
      <label className="font-bold mb-2">Select a City:</label>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        className={`p-2 rounded-md ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}`}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelectComponent;
