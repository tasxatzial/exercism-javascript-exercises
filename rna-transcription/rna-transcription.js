const RNA_TRANSCRIPTION = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

/* Given a DNA strand, return its RNA complement (per RNA transcription) */
export const toRna = (DnaString) =>
  DnaString.split('')
           .map((character) => RNA_TRANSCRIPTION[character])
           .join('');