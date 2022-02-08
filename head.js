let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

let head = function (arr){
  for (i = 0; i <= arr.length; i ++){
    return arr[0];
  }
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");