"use client";

import { TopBarComponentProps } from "@/types";

import LocationButtonComponent from "../form/LocationButtonComponent";
import LocationSearchComponent from "../form/LocationSearchComponent";
import ToggleModeComponent from "../form/ToggleModeComponent";

const TopBarComponent = ({ dark, setDark }: TopBarComponentProps) => {
  const handleGetLocation = () => {
    console.log("get current location");
  };

  return (
    <section id="top" className="container mx-auto pt-4 pb-0 px-4">
      <div className="flex justify-between items-center mb-6 gap-3">
        <div className="w-1/4">
          <ToggleModeComponent dark={dark} setDark={setDark} />
        </div>

        <div className="w-1/2">
          <LocationSearchComponent dark={dark} />
        </div>

        <div className="w-1/4 flex justify-center items-center">
          <LocationButtonComponent
            type="button"
            text="Current Location"
            onClick={handleGetLocation}
            dark={dark}
          />
        </div>
      </div>
    </section>
  );
};

export default TopBarComponent;
