import Image from "next/image";
import { ForecastComponentProps } from "@/types";
import { formatDate } from "@/utils/formatDate";

const ForecastComponent = ({ dark, data }: ForecastComponentProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center pt-4 pb-2 rounded-[20px] shadow-lg
      ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="text-2xl flex items-center font-extrabold mb-2">
        5 Day Forecast:
      </h1>

      {data.map((item, index) => (
        <div
          key={index}
           className="flex flex-row items-center justify-between gap-6 font-bold"
        >
          <Image
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={`Weather for ${item.dt_txt}`}
            width={1000}
            height={1000}
            className="w-10 h-10 object-cover"
          />
          <p className="text-md">{Math.round(item.main.temp - 273.15)}°C</p>
          <p className="text-sm">{formatDate(item.dt_txt)}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastComponent;
