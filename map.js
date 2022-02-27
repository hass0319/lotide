const assertArraysEqual = require('./assertArraysEqual');

let map = function(array , callback) {
  const results = [];
  //console.log('array: ', array);//console.log('callback: ', callback);
  for (let item of array) {
    // console.log('before: ', item);// console.log('After: ', callback(item),"\n--")
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//const x = ["g","c","t","m","t"]
console.log(assertArraysEqual(results1, ["g","c","t","m","t"]));
//map function will return a new array based on the results of the callback function.