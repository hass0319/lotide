// FUNCTION IMPLEMENTATION
// let assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
//   }
// };
let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
      : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`)
};

assertEqual("lighthouse Labs","Bootcamp");
assertEqual("lighthouse Labs","lighthouse Labs");
assertEqual(1,1);
assertEqual(1,2);