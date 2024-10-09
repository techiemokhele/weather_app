import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { LocationSearchComponentProps, WeatherData } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;

const LocationSearchComponent = ({
  dark,
  onCitySelect,
}: LocationSearchComponentProps & { onCitySelect: (city: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [citySelected, setCitySelected] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

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
    setSelectedIndex(-1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setCitySelected(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        handleSelect(suggestions[selectedIndex]);
      } else if (inputValue.trim() !== "") {
        handleSelect(inputValue);
      }
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
    }
  };

  useEffect(() => {
    if (listRef.current && selectedIndex >= 0) {
      const listElement = listRef.current;
      const selectedElement = listElement.children[
        selectedIndex
      ] as HTMLLIElement;

      if (selectedElement) {
        const listRect = listElement.getBoundingClientRect();
        const selectedRect = selectedElement.getBoundingClientRect();

        if (selectedRect.bottom > listRect.bottom) {
          listElement.scrollTop += selectedRect.bottom - listRect.bottom;
        } else if (selectedRect.top < listRect.top) {
          listElement.scrollTop -= listRect.top - selectedRect.top;
        }
      }
    }
  }, [selectedIndex]);

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
          ref={inputRef}
          id="search"
          type="text"
          placeholder="Search for your preferred city..."
          autoComplete="off"
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
          ref={listRef}
          className={`absolute z-10 mt-1 w-full shadow-lg rounded-xl max-h-60 overflow-y-auto ${
            !dark ? "bg-dark-1" : "bg-dark-2"
          }`}
        >
          {suggestions.map((city, index) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className={`p-2 cursor-pointer rounded-xl ${
                !dark
                  ? "hover:bg-dark-2 text-white hover:text-black"
                  : "hover:bg-dark-3 text-black hover:text-white"
              } ${
                index === selectedIndex
                  ? !dark
                    ? "bg-dark-2 text-black"
                    : "bg-dark-3 text-white"
                  : ""
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
