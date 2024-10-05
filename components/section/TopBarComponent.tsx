"use client";

import LocationButtonComponent from "../form/LocationButtonComponent";
import LocationSearchComponent from "../form/LocationSearchComponent";
import ToggleModeComponent from "../form/ToggleModeComponent";

const TopBarComponent = () => {
    const handleGetLocation = () => {
        console.log("get current location")
    }

  return (
    <section id="top" className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6 gap-3">
        <div className="w-1/4">
            <ToggleModeComponent/>
        </div>

        <div className="w-1/2">
            <LocationSearchComponent/>
        </div>

        <div className="w-1/4 flex justify-center items-center">
            <LocationButtonComponent
                type="button"
                text="Current Location"
                onClick={handleGetLocation}
            />
        </div>
      </div>
    </section>
  );
};

export default TopBarComponent;
