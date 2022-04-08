const GIGASECOND = 1e9; // seconds

/* Converts seconds to milliseconds */
const secondsToMilliseconds = (seconds) => 1e3 * seconds;

/* Returns the date that is 1 gigasecond (10^9s) after the provided startDate */
export const gigasecond = (startDate) => {
  let startTime = startDate.getTime();

  /* convert gigasecond to millisecons since startTime is in milliseconds */
  let endTime = startTime + secondsToMilliseconds(GIGASECOND);

  return new Date(endTime);
};
