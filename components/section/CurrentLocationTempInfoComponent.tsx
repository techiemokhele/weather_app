import Image from "next/image";
import { LocationSearchComponentProps } from "@/types";

const CurrentLocationTempInfoComponent = ({
  dark,
}: LocationSearchComponentProps) => {
  return (
    <div
      className={`flex flex-row justify-between py-2 px-8 gap-4 rounded-[20px] shadow-lg w-full
      ${!dark ? "bg-dark-3 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      {/* sunset and rise */}
      <div className="flex flex-col gap-4 lg:gap-3">
        <div className="flex flex-col leading-none">
          <h1 className="font-extrabold text-[30px] md:text-[45px] lg:text-[60px]">
            24℃
          </h1>
          <p className="font-normal flex items-center gap-1 text-xs md:text-md lg:text-lg">
            Feels like:{" "}
            <span className="font-bold text-lg md:text-xl lg:text-2xl">
              22℃
            </span>
          </p>
        </div>

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
            <div className="flex flex-col gap-1 items-center leading-none">
              <p className="font-bold text-sm md:text-md lg:text-lg">Sunrise</p>
              <p className="font-normal text-[10px] md:text-sm lg:text-m">
                06:37 AM
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
            <div className="flex flex-col gap-1 items-center leading-none">
              <p className="font-bold text-sm md:text-md lg:text-lg">Sunset</p>
              <p className="font-normal text-[10px] md:text-sm lg:text-md">
                18:37 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* current temp */}
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          priority
          src="/icons/clear.png"
          alt="sunny-icon"
          width={1000}
          height={1000}
          className="w-36 h-36 object-cover"
        />
        <p className="font-bold text-lg md:text-xl lg:text-2xl">Sunny</p>
      </div>

      {/* temperature */}
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
            <p className="font-semibold text-sm">41%</p>
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
            <p className="font-semibold text-sm">2km/h</p>
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
            <p className="font-semibold text-sm">997hPa</p>
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
            <p className="font-semibold text-sm">8</p>
            <p className="font-normal text-[10px] md:text-sm lg:text-md">UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentLocationTempInfoComponent;
