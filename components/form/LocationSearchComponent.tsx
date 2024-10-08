import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LocationSearchComponentProps, WeatherData } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;

const LocationSearchComponent = ({
  dark,
  onCitySelect,
}: LocationSearchComponentProps & { onCitySelect: (city: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [citySelected, setCitySelected] = useState<boolean>(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue.length > 2 && !citySelected) {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${API_KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          const placeNames = data.results.map(
            (result: WeatherData) => result.formatted
          );
          setSuggestions(placeNames);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [inputValue, citySelected]);

  const handleSelect = (city: string) => {
    setInputValue(city);
    setSuggestions([]);
    setCitySelected(true);
    onCitySelect(city);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCitySelected(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        handleSelect(suggestions[0]);
      } else if (inputValue.trim() !== '') {
        handleSelect(inputValue);
      }
    }
  };

  return (
    <div className="relative w-full">
      <div
        className={`flex flex-row items-center gap-1 rounded-full pl-3 shadow-md ${
          !dark
            ? "bg-dark-1 border-0 shadow-gray-500/50"
            : "bg-gray-300 border-[1px] border-black shadow-gray-700/50"
        }`}
      >
        <Image
          priority
          src="/icons/search.png"
          alt="search-icon"
          width={1000}
          height={1000}
          className="w-4 h-auto object-cover"
        />
        <input
          id="search"
          type="text"
          placeholder="Search for your preferred city..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`w-full p-2 rounded-full text-[10px] md:text-sm lg:text-md ${
            dark
              ? "bg-gray-300 text-black placeholder-gray-600"
              : "bg-dark-1 text-white placeholder-gray-300"
          } placeholder-opacity-75 focus:outline-none focus:ring-0`}
        />
      </div>

      {suggestions.length > 0 && !citySelected && (
        <ul
          className={`absolute z-10 mt-1 w-full shadow-lg rounded-xl  ${
            !dark ? "bg-dark-1" : "bg-dark-2"
          }`}
        >
          {suggestions.map((city) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className={`p-2 cursor-pointer rounded-xl ${
                !dark
                  ? "hover:bg-dark-2 text-white hover:text-black"
                  : "hover:bg-dark-3 text-black hover:text-white"
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearchComponent;
