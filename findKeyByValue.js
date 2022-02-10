let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
      : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`)
};

const findKeyByValue = function(object, value) {
  for (let objKey in object ) {
    if (object[objKey] === value){
      return objKey;
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);