import { BottomSectionComponentProps } from "@/types";

import forecastData from "@/data/fiveDayForecast.json";
import forecastHourlyData from "@/data/hourlyForecast.json";

import ForecastComponent from "./ForecastComponent";
import CurrentDayHourlyForecastComponent from "./CurrentDayHourlyForecastComponent";

const BottomSectionComponent = ({ dark }: BottomSectionComponentProps) => {
  const forecastDataItems = forecastData.forecast;
  const forecastHourlyDataItems = forecastHourlyData.hourlyForecast;

  return (
    <section
      id="bottom"
      className="container mx-auto py-0 px-6 md:px-8 lg:px-16"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-6 gap-8 w-full">
        <div className="w-full md:w-2/4 lg:w-2/4">
          <ForecastComponent dark={dark} data={forecastDataItems} />
        </div>

        <div className="w-full">
          <CurrentDayHourlyForecastComponent
            dark={dark}
            data={forecastHourlyDataItems}
          />
        </div>
      </div>
    </section>
  );
};

export default BottomSectionComponent;