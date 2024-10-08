import Image from "next/image";
import { ForecastComponentProps } from "@/types";
import { formatDate } from "@/utils/formatDate";

const ForecastComponent = ({ dark, data }: ForecastComponentProps) => {
  return (
    <div
      className={`flex flex-col pt-4 pb-2 px-4 rounded-[20px] shadow-lg
      ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="text-2xl flex items-center justify-center font-extrabold mb-2">
        5 Day Forecast:
      </h1>

      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center font-bold w-full"
        >
          <div className="w-1/4 flex justify-center text-center">
            <Image
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={`Weather for ${item.dt_txt}`}
              width={1000}
              height={1000}
              className="w-10 h-10 object-cover"
            />
          </div>

          <div className="w-1/4 flex justify-center text-center">
            <p className="text-sm md:text-xs lg:text-md">
              {Math.round(item.main.temp - 273.15)}°C
            </p>
          </div>

          <div className="w-1/2 flex justify-center text-center">
             <p className="text-sm md:text-xs lg:text-md">{formatDate(item.dt_txt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastComponent;
