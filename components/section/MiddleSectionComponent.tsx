import { LocationSearchComponentProps } from "@/types";

import LocationDateTimeComponent from "./LocationDateTimeComponent";
import CurrentLocationTempInfoComponent from "./CurrentLocationTempInfoComponent";

const MiddleSectionComponent = ({ dark }: LocationSearchComponentProps) => {
  return (
    <section id="middle" className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6 gap-3 w-full">
        <div className="w-1/3">
          <LocationDateTimeComponent dark={dark} />
        </div>

        <div className="w-full">
          <CurrentLocationTempInfoComponent dark={dark} />
        </div>
      </div>
    </section>
  );
};

export default MiddleSectionComponent;
