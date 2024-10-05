import Image from "next/image";
import { ButtonComponentProps } from "@/types";

const LocationButtonComponent = ({
  text,
  type,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex flex-row items-center gap-2 bg-green-500 font-bold text-[10px] md:text-md lg:text-lg  text-white px-4 py-2 rounded-full"
    >
      <Image src="/icons/target.png" alt="target-icon" width={16} height={16} />
      {text}
    </button>
  );
};

export default LocationButtonComponent;
