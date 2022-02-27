const assertEqual = require("./assertEqual");

const findKey = function(object , callback) {
  for (let nameKey in object) {
    if (callback(object[nameKey])) {
    //console.log('--object[key]: ',object[nameKey].stars,'--');
      return nameKey;
    }
  }
};

module.exports = findKey;

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma")); // => "noma"