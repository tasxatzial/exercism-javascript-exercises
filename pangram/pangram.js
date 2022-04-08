const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

/* Returns true iff string is pangram, that is it contains all letters of the
alphabet at least once (case insensitive) */
export const isPangram = (string) => {
  let lowerCaseString = string.toLowerCase();
  return ALPHABET.every(letter => RegExp(letter).test(lowerCaseString));
};
