const ORBITAL_PERIODS_IN_EARTH_YEARS = {
  earth: 1.0,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

const EARTH_YEAR_IN_SECONDS = 31557600;

/* Returns a number that has at most 2 decimal digits */
const twoDecimalDigits = (number) => Math.round(100 * number) / 100;

/* Returns the planet period in seconds */
const planetPeriod = (planet) => EARTH_YEAR_IN_SECONDS * ORBITAL_PERIODS_IN_EARTH_YEARS[planet];

/* Returns how old (in years) someone would be on a planet if given an age in seconds */
export const age = (planet, ageInSeconds) => {
  let ageInYears = ageInSeconds / planetPeriod(planet);
  return twoDecimalDigits(ageInYears);
};
