import { ToggleModeComponentProps } from "@/types";
import { GoDotFill } from "react-icons/go";

const ToggleModeComponent = ({ dark, setDark }: ToggleModeComponentProps) => {
  const handleToggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center text-[10px] md:text-md lg:text-lg gap-1">
      <div
        onClick={handleToggle}
        className={`flex items-center rounded-full w-16 h-6 bg-gray-300 ${
          dark ? "justify-start border-[1px] border-black" : "justify-end border-0"
        }`}
      >
        <GoDotFill size={26} color="#000" />
      </div>
      <p className={`font-bold ${!dark ? "text-white": "text-black"}`}>{!dark ? "Dark" : "Light"} Mode</p>
    </div>
  );
};

export default ToggleModeComponent;
