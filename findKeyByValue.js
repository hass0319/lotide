const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  for (let objKey in object) {
    if (object[objKey] === value) {
      return objKey;
    }
  }
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);