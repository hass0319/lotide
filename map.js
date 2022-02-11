//map function will take in two arguments:
  //An array to map
  //A callback function
  let eqArrays = (arr1, arr2) => {
    return arr1[0] === arr2[0] ?
      (arr1[1] === arr2[1] ?
        (arr1[2] === arr2[2] ?
          true : false) : false) : false;
  };
  
  let assertArraysEqual = (arr1, arr2) => {
    eqArrays(arr1, arr2) ?
      console.log(`✅ Assertion passed: ${arr1} === ${arr2}`)
      : console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
  };

let map =function (array , callback){
  const results = [];
  //console.log('array: ', array);//console.log('callback: ', callback);
  for (let item of array){
    // console.log('before: ', item);// console.log('After: ', callback(item),"\n--")
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
//const x = ["g","c","t","m","t"]
console.log(assertArraysEqual(results1, ["g","c","t","m","t"]));
//map function will return a new array based on the results of the callback function.