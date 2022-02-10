// take in two objects
// return true or false if object1 === object2
let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
      : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`)
};
let eqArrays = function(arr1, arr2) {
  return arr1[0] === arr2[0] ?
    (arr1[1] === arr2[1] ?
      (arr1[2] === arr2[2] ?
        true : false) : false) : false;
};

const eqObjects = function(object1, object2) {
  //check object length
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
    for (let key of object1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
      if (Array.isArray(object1)=== Array.isArray(object2))
      return true;
    }

    // console.log(object2);
    //console.log(object2[key2]);
    return false
  return true;
  // console.log(object1);
  // console.log(object2);
};
// console.log( `${key1}: ${object1[key1]}`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);
//assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
