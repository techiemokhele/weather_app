"use client";

import { useEffect, useState } from "react";
import { LocationSearchComponentProps } from "@/types";
import { useLocation } from "@/hooks/useLocation";
import { formatDateTime } from "@/utils/formatDate";

const LocationDateTimeComponent = ({ dark }: LocationSearchComponentProps) => {
  const { city, error } = useLocation();
  const [dateTime, setDateTime] = useState<{
    time: string;
    dateString: string;
  } | null>(null);

  useEffect(() => {
    const now = new Date();
    setDateTime(formatDateTime(now));
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center py-6 px-8 gap-4 rounded-[20px] shadow-lg
      ${!dark ? "bg-dark-3 text-white" : "bg-dark-2 text-black"}
      `}
      style={{
        boxShadow: "10px 10px 2px rgba(0, 0, 0, 0.7)",
      }}
    >
      <h1 className="font-bold text-xl lg:text-2xl mb-2">
        {error ? error : city || "Getting location..."}
      </h1>

      {dateTime && (
        <div className="flex flex-col items-center leading-none">
          <p className="text-[72px] font-extrabold tracking-tight">
            {dateTime.time}
          </p>
          <p className="text-sm font-normal mt-1">{dateTime.dateString}</p>
        </div>
      )}
    </div>
  );
};

export default LocationDateTimeComponent;