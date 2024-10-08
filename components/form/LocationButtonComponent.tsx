import Image from "next/image";
import { ButtonComponentProps } from "@/types";

const LocationButtonComponent = ({
  text,
  type,
  onClick,
  dark,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex flex-row items-center gap-2 bg-green-500 font-bold text-[10px] md:text-sm lg:text-md text-white px-4 py-2 rounded-full ${
        !dark ? "shadow-md shadow-gray-500/50" : "shadow-md shadow-gray-700/50"
      }`}
    >
      <Image src="/icons/target.png" alt="target-icon" width={16} height={16} />
      {text}
    </button>
  );
};

export default LocationButtonComponent;
