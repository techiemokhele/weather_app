import Image from "next/image";

const LocationSearchComponent = () => {
  return (
    <div className="flex flex-row items-center relative w-full gap-2 bg-gray-700 rounded-full pl-3">
      <Image
        priority
        src="/icons/search.png"
        alt="search-icon"
        width={1000}
        height={1000}
        className="w-4 h-auto object-cover"
      />
      <input
        type="text"
        placeholder="Search for your preferred city..."
        className="w-full p-2 bg-gray-700 rounded-full text-md lg:text-lg "
      />
    </div>
  );
};

export default LocationSearchComponent;
