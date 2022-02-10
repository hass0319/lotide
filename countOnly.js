let assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`)
      : console.log(`🛑 Assertion failed: ${actual} !== ${expected}`)
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let name of itemsToCount) {
    if (allItems[name] === true) {
      // console.log(name);
      //insert name into result as keys
      //insert value of count to name(keys)
      // result[name] = 1;
      if (result[name] !== undefined) {
        result[name] ++;
      } else {
        result[name] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


// const animals = {
//   cats: 2,
//   dogs: 4
// }
// let anotherAnimal = 'ferret'

// animals.fang = 8;
// animals[anotherAnimal] = 2;
// console.log(animals);
// console.log(animals[anotherAnimal]);
// console.log(animals.ferret);
