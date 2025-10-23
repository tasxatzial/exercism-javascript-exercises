/* Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
*/

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

const ORBITAL_PERIODS_IN_SECONDS = {};

const PLANETS = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

Object.entries(ORBITAL_PERIODS_IN_EARTH_YEARS).forEach(([key, value]) => {
  ORBITAL_PERIODS_IN_SECONDS[key] = EARTH_YEAR_IN_SECONDS * value;
});

/* Returns a number that has at most 2 decimal digits */
const twoDecimalDigits = (number) => Math.round(100 * number) / 100;

export const age = (planet, seconds) => {
  if (!PLANETS.includes(planet)) {
    throw new Error('not a planet');
  }
  let age = seconds / ORBITAL_PERIODS_IN_SECONDS[planet];
  return twoDecimalDigits(age);
}
