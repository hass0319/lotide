let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
};

// let eqArrays = function(arr1, arr2) {
//   return arr1[0] === arr2[0] ?
//     (arr1[1] === arr2[1] ?
//       (arr1[2] === arr2[2] ?
//         true : false) : false) : false;
// };
let eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    console.log(`for i arr1 ${arr1}`);
    for (let j = 0; j <= arr2.length; j++) {
      console.log(`for J arr1 ${arr2}`);
      console.log(`for J arr1[i]: ${arr1}, ${i} === arr2[j]: ${arr2}, ${j}`);
      if (arr1[i] === arr2[j]) {
        console.log(`if arr1[i]: ${arr1[i]} === arr2[j]: ${arr2[j]}`);
        return console.log(true);
      } else {
        return console.log(false);
      }
      //console.log(`After arr1[i]: ${arr1[i]} === arr2[j]: ${arr2[j]}`);
    }
  }
};
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);