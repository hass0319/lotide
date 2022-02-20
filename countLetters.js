const assertEqual = require('./assertEqual');

let countLetters = function(sentence) {
  let letterObj = {};
  let letterArray = [];
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterObj[letter] !== undefined) {
        letterObj[letter] ++;
      } else {//letterObj[letters] === undefined
        letterArray.push(letterObj[letter] = 1);
      }
    }
  }
  return letterObj;
};

const result1 = countLetters("lighthouse in the house");
console.log(result1);
assertEqual(result1.h , 4);
