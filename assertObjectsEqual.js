const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ?
    console.log(`✅ Assertion passed: ${actual} === ${expected}`)
    : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  
  console.log(`Example label: ${inspect(actual)}`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(eqObjects(cd, cd2), false);

module.exports = assertObjectsEqual;



// let eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i <= arr1.length; i++) {
//   //   if (arr1[i] !== arr2[i]) {
//   //     return false;
//   //   }
//   // }
//   // return true;
//     return arr1[0] === arr2[0] ?
//       (arr1[1] === arr2[1] ?
//         (arr1[2] === arr2[2] ?
//           true : false) : false) : false;
//   }
// };
eqObjects(ab, ba);
assertObjectsEqual(eqObjects(ab, ba), true); // => true
assertObjectsEqual(eqObjects(cd, dc), true);