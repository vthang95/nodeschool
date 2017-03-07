function countWords(inputWords) {
  let result = {};
  inputWords.reduce(((previous, current, index, array) => {
    if (!result[current]) {
      result[current] = 1;
    } else {
      result[current]++;
    }
    return current;
  }), null);
  return result;
}

module.exports = countWords;
