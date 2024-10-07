"use client";

import Image from "next/image";
import { useState } from "react";

import { TopBarComponentProps, WeatherData } from "@/types";
import LocationButtonComponent from "../form/LocationButtonComponent";
import LocationSearchComponent from "../form/LocationSearchComponent";
import ToggleModeComponent from "../form/ToggleModeComponent";

const TopBarComponent = ({
  dark,
  setDark,
  onCitySelect,
}: TopBarComponentProps) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();

      const formattedWeatherData: WeatherData = {
        uvi: data.current?.uvi || 0,
        dt_txt: data.dt_txt || "",
        message: data.message || "",
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        formatted: data.formatted || "",
        main: {
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          uvi: data.main.uvi,
        },
        sys: {
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        },
        weather: data.weather,
        wind: {
          speed: data.wind.speed,
          deg: data.wind.deg,
        },
      };

      setWeatherData(formattedWeatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    fetchWeatherData(city);
  };

  return (
    <section id="top" className="container mx-auto pt-4 pb-0 px-4">
      <div className="flex justify-between items-center mb-6 gap-3">
        <div className="w-1/4">
          <ToggleModeComponent dark={dark} setDark={setDark} />
        </div>

        <div className="w-1/2">
          <LocationSearchComponent
            dark={dark}
            onCitySelect={handleCitySelect}
          />
        </div>

        <div className="w-1/4 flex justify-center items-center">
          <LocationButtonComponent
            type="button"
            text="Current Location"
            onClick={() => console.log("get current location")}
            dark={dark}
          />
        </div>
      </div>

      {weatherData && (
        <div className={`weather-info ${dark ? "text-white" : "text-black"}`}>
          <h2>{`Temperature: ${weatherData.temperature}°C`}</h2>
          <p>{`Description: ${weatherData.description}`}</p>
          {weatherData.icon && (
            <Image
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather icon"
              width={50}
              height={50}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default TopBarComponent;
