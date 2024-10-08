"use client";

import { useEffect, useState } from "react";
import { LocationSearchComponentProps } from "@/types";
import { formatDateTime } from "@/utils/formatDate";

const LocationDateTimeComponent = ({
  dark,
  city,
}: LocationSearchComponentProps) => {
  const [dateTime, setDateTime] = useState<{
    time: string;
    dateString: string;
  } | null>(null);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(formatDateTime(now));
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center py-[40px] md:py-[44px] lg:py-[44px] px-8 gap-4 rounded-[20px] shadow-lg
      ${!dark ? "bg-dark-1 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="font-bold text-xl lg:text-2xl mb-2 line-clamp-3">
        {city ? city.split(",")[0] : "Getting location..."}
      </h1>
      {dateTime && (
        <div className="flex flex-col items-center leading-none">
          <p className="text-[72px] font-extrabold tracking-tight">
            {dateTime.time}
          </p>
          <p className="text-sm font-normal mt-1 text-center">
            {dateTime.dateString}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationDateTimeComponent;
