// const eqArrays = require ('../eqArrays');
// const assertEqual = require ('../../assertEqual')

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// assertEqual(eqArrays([1], []), false);


const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3]), [1, 2, 3]);
  });
  
  // it("returns [\"1\", \"2\", \"3\"] for [\"1\", \"2\", 3]", () => {
  //   assert.isFalse(assertArraysEqual(["1", "2", "3"]), ["1", "2", 3]); 
  // });
});