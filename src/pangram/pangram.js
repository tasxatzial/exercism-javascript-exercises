/* Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter")
is a sentence using every letter of the alphabet at least once. */

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = (string) => {
  let lowerCaseString = string.toLowerCase();
  return ALPHABET.every(letter => lowerCaseString.includes(letter));
};
