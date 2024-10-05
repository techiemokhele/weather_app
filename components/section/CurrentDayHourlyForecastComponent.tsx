import Image from "next/image";
import { ForecastHourlyComponentProps } from "@/types";

const CurrentDayHourlyForecastComponent = ({
  dark,
  data,
}: ForecastHourlyComponentProps) => {
  return (
    <div
      className={`flex flex-col justify-between pt-3 pb-6 px-8 gap-4 rounded-[20px] shadow-lg w-full
      ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="flex items-center justify-center font-extrabold text-2xl mb-4">
        Hourly Forecast:
      </h1>

      <div className="flex gap-3 justify-center items-center w-full overflow-x-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center gap-1 rounded-[20px] px-4 py-2 shadow-md ${
              !dark
                ? "bg-dark-5"
                : item.time >= "18:00:00"
                ? "bg-gradient-to-b from-purple-1 to-purple-2"
                : "bg-gradient-to-b from-amber-1 to-amber-2"
            }`}
          >
            <p className="font-bold text-lg">{item.time.slice(0, 5)}</p>
            <Image
              src={item.image}
              alt="Weather Icon"
              width={40}
              height={40}
              className="object-cover"
            />
            <p className="text-xs md:text-sm lg:text-md font-semibold">
              {item.temperature}
            </p>
            <Image
              src={item.windIcon}
              alt="Wind Icon"
              width={20}
              height={20}
              className="object-cover"
            />
            <p className="text-sm font-bold">{item.windSpeed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDayHourlyForecastComponent;
