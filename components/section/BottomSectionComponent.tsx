import { useEffect, useState } from "react";

import ForecastComponent from "./ForecastComponent";
import CurrentDayHourlyForecastComponent from "./CurrentDayHourlyForecastComponent";
import { BottomSectionComponentProps, WeatherData } from "@/types";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY;

const BottomSectionComponent = ({
  dark,
  selectedCity,
}: BottomSectionComponentProps) => {
  const [forecastData, setForecastData] = useState<WeatherData[]>([]);
  const [forecastHourlyData, setForecastHourlyData] = useState<WeatherData[]>(
    []
  );

  const getWeatherForecast = async () => {
    if (!selectedCity) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${API_KEY}`
      );
      const data = await response.json();

      console.log("weather data: ", response);

      if (response.ok) {
        const dailyForecast = data.list.filter((item: WeatherData) =>
          item.dt_txt.includes("12:00:00")
        );
        const hourlyForecast = data.list.slice(0, 5); // Next 5 hours
        setForecastData(dailyForecast);
        setForecastHourlyData(hourlyForecast);
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching weather forecast:", error);
    }
  };

  useEffect(() => {
    getWeatherForecast();
  }, [selectedCity]);

  return (
    <section
      id="bottom"
      className="container mx-auto py-0 px-6 md:px-8 lg:px-16"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-6 gap-8 w-full">
        <div className="w-full md:w-2/4 lg:w-2/4">
          <ForecastComponent dark={dark} data={forecastData} />
        </div>

        <div className="w-full">
          <CurrentDayHourlyForecastComponent
            dark={dark}
            data={forecastHourlyData}
          />
        </div>
      </div>
    </section>
  );
};

export default BottomSectionComponent;
