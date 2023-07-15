const GIGASECOND = 1e9; // seconds
const secondsToMilliseconds = (seconds) => 1e3 * seconds;

/* Returns the date when 1 gigasecond (10^9s) is added to startDate */
export const gigasecond = (startDate) => {
  let startTime = startDate.getTime(); // ms
  let endTime = startTime + secondsToMilliseconds(GIGASECOND);
  return new Date(endTime);
};
