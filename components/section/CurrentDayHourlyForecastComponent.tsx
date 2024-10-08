import Image from "next/image";
import { ForecastHourlyComponentProps } from "@/types";

const CurrentDayHourlyForecastComponent = ({
  dark,
  data,
}: ForecastHourlyComponentProps) => {
  return (
    <div
      className={`flex flex-col justify-between pt-3 pb-6 px-4 sm:px-8 gap-4 rounded-[20px] shadow-lg w-full
      ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="flex items-center justify-center font-extrabold text-2xl mb-4">
        Hourly Forecast:
      </h1>

      <div className="relative w-full">
        <div className="flex gap-3 justify-start md:justify-center lg:justify-center items-center w-full overflow-x-auto pb-4 mx-0 px-4 sm:mx-0 sm:px-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex flex-col items-center justify-center gap-1 rounded-[20px] px-4 py-2 shadow-md ${
                !dark
                  ? "bg-dark-5"
                  : parseInt(item.dt_txt.slice(11, 13)) >= 18 ||
                    parseInt(item.dt_txt.slice(11, 13)) <= 5
                  ? "bg-gradient-to-b from-purple-1 to-purple-2"
                  : "bg-gradient-to-b from-amber-1 to-amber-2"
              }`}
            >
              <p className="font-bold text-lg">{item.dt_txt.slice(11, 16)}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="text-xs md:text-sm lg:text-md font-semibold">
                {Math.round(item.main.temp - 273.15)}°C
              </p>
              <Image
                src="/icons/navigation.png"
                alt="Wind Icon"
                width={20}
                height={20}
                className="object-cover"
                style={{
                  transform: `rotate(${item.wind.deg ?? 0}deg)`,
                }}
              />
              <p className="text-sm font-bold">{item.wind.speed}km/h</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentDayHourlyForecastComponent;
