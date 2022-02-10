let eqArrays = (arr1, arr2) => {
  return arr1[0] === arr2[0] ?
    (arr1[1] === arr2[1] ?
      (arr1[2] === arr2[2] ?
        true : false) : false) : false;
};

let assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ?
    console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
};

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