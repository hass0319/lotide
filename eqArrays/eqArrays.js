const assertEqual = require('../assertEqual')

let eqArrays = function(arr1, arr2) {
  return arr1[0] === arr2[0] ?
    (arr1[1] === arr2[1] ?
      (arr1[2] === arr2[2] ?
        true : false) : false) : false;
};
module.exports = eqArrays;

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));


