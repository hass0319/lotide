let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(sentence) {
  let letterObj = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterObj[letter] !== undefined) {
        letterObj[letter] ++;
      } else {//letterObj[letters] === undefined
        letterObj[letter] = 1;
      }
    }
  }
  return letterObj;
};

const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1.h , 4);
