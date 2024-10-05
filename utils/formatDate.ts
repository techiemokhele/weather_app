/**
 * Format a given date into a human-readable format.
 *
 * @param {Date} date Date object to be formatted.
 *
 * @returns {{ time: string; dateString: string }}
 * An object containing the time in 24h format and the date in the
 * format 'Weekday, Month Day, Year'.
 */
export const formatDateTime = (
  date: Date
): { time: string; dateString: string } => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = date.toLocaleDateString("en-ZA", options);

  return { time, dateString };
};
