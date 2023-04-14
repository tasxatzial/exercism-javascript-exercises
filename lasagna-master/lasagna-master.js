/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

const PREPARATION_TIME_PER_LAYER = 2;
const GRAMS_PER_NOODLES_LAYER = 50;
const GRAMS_PER_SAUCE_LAYER = 0.2;

export function cookingStatus(timeLeft) {
  switch(timeLeft) {
    case undefined:
      return 'You forgot to set the timer.'
    case 0:
      return 'Lasagna is done.';
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodlesGrams = 0;
  let sauceGrams = 0;
  for (const layer of layers) {
    if (layer === 'sauce') {
      sauceGrams += GRAMS_PER_SAUCE_LAYER;
    } else if (layer === 'noodles') {
      noodlesGrams += GRAMS_PER_NOODLES_LAYER;
    }
  }
  return {
    noodles: noodlesGrams,
    sauce: sauceGrams
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {...recipe};
  const scaleFactor = portions / 2;
  for (const ingredient in scaledRecipe) {
    scaledRecipe[ingredient]  *= scaleFactor;
  }
  return scaledRecipe;
}