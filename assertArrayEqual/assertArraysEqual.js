const eqArrays = require ('../eqArrays/eqArrays')

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ?
    console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
    : console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
};
module.exports = assertArraysEqual;

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