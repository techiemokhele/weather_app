import Image from "next/image";
import { LocationSearchComponentProps } from "@/types";

const LocationSearchComponent = ({ dark }: LocationSearchComponentProps) => {
  return (
    <div
      className={`flex flex-row items-center relative w-full gap-1 rounded-full pl-3 shadow-md ${
        !dark
          ? "bg-dark-1 border-0 shadow-gray-500/50"
          : "bg-gray-300 border-[1px] border-black shadow-gray-700/50"
      }`}
    >
      <Image
        priority
        src="/icons/search.png"
        alt="search-icon"
        width={1000}
        height={1000}
        className="w-4 h-auto object-cover"
      />
      <input
        id="search"
        type="text"
        placeholder="Search for your preferred city..."
        className={`w-full p-2 rounded-full text-md lg:text-lg ${
          dark
            ? "bg-gray-300 text-black placeholder-gray-600"
            : "bg-dark-1 text-white placeholder-gray-300"
        } placeholder-opacity-75 focus:outline-none focus:ring-0`}
      />
    </div>
  );
};

export default LocationSearchComponent;
