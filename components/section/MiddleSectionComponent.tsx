import { LocationSearchComponentProps } from "@/types";

import LocationDateTimeComponent from "./LocationDateTimeComponent";
import CurrentLocationTempInfoComponent from "./CurrentLocationTempInfoComponent";

const MiddleSectionComponent = ({ dark }: LocationSearchComponentProps) => {
  return (
    <section id="middle" className="container mx-auto py-0 px-4">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-6 gap-8 w-full">
        <div className="w-full md:w-2/4 lg:w-2/4">
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
