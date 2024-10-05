import { useEffect, useState } from "react";

  /**
   * Provides the user's location as a city name or an error message.
   *
   * The hook uses the `geolocation` API to get the user's current position, and
   * then fetches the city name from the OpenCage Geocoder API.
   *
   * @returns 
   * An object with the city name as a string, or an error message as a string.
   * If the user's location is not supported, the error message is "Geolocation not supported".
   * If the fetch fails, the error message is "Failed to fetch city name".
   * If the city is not found, the error message is "City not found".
   */
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

  /**
   * Fetches the city name from the OpenCage Geocoder API.
   *
   * @param {number} lat The latitude of the location.
   * @param {number} long The longitude of the location.
   * @returns {Promise<string>} 
   * 
   * A promise that resolves to the city name as a string, or rejects with an error.
   * If the fetch fails, the error message is "Failed to fetch city name".
   * If the city is not found, the error message is "City not found".
   */
  const getCityName = async (lat: number, long: number): Promise<string> => {
    const apiKey = process.env.OPENCAGE_API_KEY;
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
