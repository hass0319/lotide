// let assertEqual = function(actual, expected) {
//   actual === expected ?
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
// };

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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// let eqArrays = function(arr1, arr2) {
//   for(let i = 0; i <= arr1.length; i++){
//     for(let j = 0; j <= arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         return true;
//       };
//     };
//   };
// };
// console.log(`✅ Assertion Passed: ${arr1[0]} === ${arr2[0]}`)