let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
      : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`)
};

let head = function(arr) {
  for (let i = 0; i <= arr.length; i ++) {
    return arr[0];
    //return (arr && arr.length) ? arr[0] : undefined; from LODASH
  }
};
assertEqual(head([5,6,7]), 5);
assertEqual(head([6]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
head([5,6,7]);