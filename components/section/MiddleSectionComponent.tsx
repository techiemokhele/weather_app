import { LocationSearchComponentProps } from "@/types";
import LocationDateTimeComponent from "./LocationDateTimeComponent";
import CurrentLocationTempInfoComponent from "./CurrentLocationTempInfoComponent";

const MiddleSectionComponent = ({
  dark,
  city,
}: LocationSearchComponentProps) => {
  return (
    <section
      id="middle"
      className="container mx-auto py-0 px-6 md:px-10 lg:px-16"
    >
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mb-6 gap-8 w-full">
        <div className="w-full md:w-2/4 lg:w-2/4">
          <LocationDateTimeComponent dark={dark} />
        </div>

        <div className="w-full">
          <CurrentLocationTempInfoComponent dark={dark} city={city} />
        </div>
      </div>
    </section>
  );
};

export default MiddleSectionComponent;
