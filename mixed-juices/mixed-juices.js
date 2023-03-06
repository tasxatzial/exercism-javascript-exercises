// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let cutWedges = 0;
  let limesIdx = 0;
  while (cutWedges < wedgesNeeded && limesIdx < limes.length) {
    switch(limes[limesIdx]) {
      case 'small':
        cutWedges += 6;
        break;
      case 'medium':
        cutWedges += 8;
        break;
      case 'large':
        cutWedges += 10;
        break;
    }
    limesIdx++;
  }
  return limesIdx;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft positive number
 * @param {string[]} orders non empty array
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let orderIdx = 0;
  do {
    timeLeft -= timeToMixJuice(orders[orderIdx]);
    orderIdx++;
  } while (timeLeft > 0 && orderIdx < orders.length);
  return orders.slice(orderIdx);
}
