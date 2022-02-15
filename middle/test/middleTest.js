// const middle = require('../middle');
// const assertArraysEqual = require ('../../assertArraysEqual/assertArraysEqual')

// // For arrays with one or two elements, there is no middle. Return an empty array.
// assertArraysEqual(middle([1]),[]); // => []
// assertArraysEqual(middle([1, 2]),[]); // => []
// //For arrays with ODD number of elements, an array containing a SINGLE middle element should be RETURNED.
// assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

// //For arrays with an EVEN number of elements, an array containing the TWO elements in the middle should be RETURNED
// assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);// => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]

const assert = require('chai').assert;
const middle   = require('../middle');



describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]) , [2,3])});
  
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
});
