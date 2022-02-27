
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
};
module.exports = assertEqual;