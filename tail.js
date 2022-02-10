let assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

let tail = function(arr) {
  let tailArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 0) {
      // i won't work becaus eit will exit the function as the first iteration is 0, arr.length is better because] it looks though the whole array
      return [];
    }
    if (i > 0) {
      //console.log(arr[i]);
      tailArr.push(arr[i]);
    }
  }
  //console.log(tailArr)
  return tailArr;
};
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!