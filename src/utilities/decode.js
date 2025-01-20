function letterToIndex(letter) {
  const charCode = letter.toLowerCase().charCodeAt(0);
  return charCode - "a".charCodeAt(0);
}

function indexToLetter(number) {
  return String.fromCharCode(number + "a".charCodeAt(0));
}

export { letterToIndex, indexToLetter };
