const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]] !== undefined) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h,[0]);

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house").i,[1,11]);