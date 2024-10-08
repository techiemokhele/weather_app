import React, { useEffect, useState } from "react";
import Image from "next/image";

import { LocationSearchComponentProps, WeatherData } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY;

const CurrentLocationTempInfoComponent = ({
  dark,
  city,
}: LocationSearchComponentProps) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );

  const getCurrentWeather = async (): Promise<void> => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data: WeatherData = await response.json();

      if (response.ok) {
        setCurrentWeather(data);
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching current weather:", error);
    }
  };

  useEffect(() => {
    getCurrentWeather();
    const interval = setInterval(getCurrentWeather, 300000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div
      className={`flex flex-row justify-between pt-2 pb-4 px-8 gap-4 rounded-[20px] shadow-lg w-full
    ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
    `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      {!currentWeather ? (
        <div className="flex flex-1 items-center justify-center font-extrabold">
          <p className={`${!dark ? "text-white" : "text-black"}`}>
            Loading weather data...
          </p>
        </div>
      ) : (
        <>
          {/* Temperature Section */}
          <div className="flex flex-col gap-4 lg:gap-3">
            <div className="flex flex-col leading-none">
              <h1
                className={`font-extrabold text-[30px] md:text-[45px] lg:text-[60px] ${
                  !dark
                    ? "bg-gradient-to-r from-dark-2 to-dark-4 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-dark-4 to-dark-2 text-transparent bg-clip-text"
                }`}
              >
                {Math.round(currentWeather.main.temp)}℃
              </h1>
              <p className="font-normal flex items-center gap-1 text-[10px] md:text-xs lg:text-lg">
                Feels like:{" "}
                <span className="font-bold text-lg md:text-xl lg:text-2xl">
                  {Math.round(currentWeather.main.feels_like)}℃
                </span>
              </p>
            </div>

            {/* Sunrise and Sunset */}
            <div className="flex flex-col gap-6 lg:gap-4">
              <div className="flex flex-row items-center gap-2">
                <Image
                  priority
                  src="/icons/sunrise-white.png"
                  alt="sunrise-icon"
                  width={1000}
                  height={1000}
                  className={`w-10 h-10 object-cover ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <div className="flex flex-col gap-1 md:gap-0 lg:gap-0 items-center leading-none">
                  <p className="font-bold text-xs md:text-md lg:text-lg">
                    Sunrise
                  </p>
                  <p className="font-normal text-[10px] md:text-sm lg:text-m uppercase text-center">
                    {new Date(
                      currentWeather.sys.sunrise * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Image
                  priority
                  src="/icons/sunset-white.png"
                  alt="sunset-icon"
                  width={1000}
                  height={1000}
                  className={`w-10 h-10 object-cover ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <div className="flex flex-col gap-1 md:gap-0 lg:gap-0 items-center leading-none">
                  <p className="font-bold text-xs md:text-md lg:text-lg">
                    Sunset
                  </p>
                  <p className="font-normal text-[10px] md:text-sm lg:text-m uppercase text-center">
                    {new Date(
                      currentWeather.sys.sunset * 1000
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Icon and Condition */}
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              priority
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weather-icon"
              width={1000}
              height={1000}
              className="w-28 h-28 md:w-36 md:h-36 lg:w-36 lg:h-36 object-cover"
            />
            <p className="font-bold text-lg md:text-xl lg:text-2xl text-center">
              {currentWeather.weather[0].description}
            </p>
          </div>

          {/* Wind Weather Data */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-between">
              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  priority
                  src="/icons/humidity.png"
                  alt="humidity-icon"
                  width={1000}
                  height={1000}
                  className={`w-8 h-8 object-contain ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <p className="font-semibold text-xs lg:text-sm text-center">
                  {currentWeather.main.humidity}%
                </p>
                <p className="font-normal text-[10px] md:text-sm lg:text-md">
                  Humidity
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  priority
                  src="/icons/wind.png"
                  alt="wind-icon"
                  width={1000}
                  height={1000}
                  className={`w-8 h-8 object-contain ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <p className="font-semibold text-xs lg:text-sm text-center">
                  {currentWeather.wind.speed}km/h
                </p>
                <p className="font-normal text-[10px] md:text-sm lg:text-md">
                  Wind
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-between">
              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  priority
                  src="/icons/pressure-white.png"
                  alt="pressure-icon"
                  width={1000}
                  height={1000}
                  className={`w-8 h-8 object-contain ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <p className="font-semibold text-xs lg:text-sm text-center">
                  {currentWeather.main.pressure}hPa
                </p>
                <p className="font-normal text-[10px] md:text-sm lg:text-md">
                  Pressure
                </p>
              </div>

              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  priority
                  src="/icons/uv-white.png"
                  alt="uv-icon"
                  width={1000}
                  height={1000}
                  className={`w-8 h-8 object-contain ${
                    dark ? "filter invert" : ""
                  }`}
                />
                <p className="font-semibold text-xs lg:text-sm text-center">
                  {currentWeather.uvi || 8}
                </p>
                <p className="font-normal text-[10px] md:text-sm lg:text-md">
                  UV
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentLocationTempInfoComponent;
