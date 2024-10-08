import { useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState<{
    city: string | null;
    error: string | null;
  }>({ city: null, error: null });

  useEffect(() => {
    const fetchLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const city = await getCityName(latitude, longitude);
            setLocation({ city, error: null });
          },
          (error) => {
            setLocation({ city: null, error: error.message });
          }
        );
      } else {
        setLocation({ city: null, error: "Geolocation not supported" });
      }
    };

    fetchLocation();
  }, []);

  const getCityName = async (lat: number, long: number): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch city name");
    }

    const data = await response.json();

    if (data.results.length > 0) {
      return (
        data.results[0].components.city ||
        data.results[0].components.town ||
        "Unknown Location"
      );
    }

    throw new Error("City not found");
  };

  return location;
};
