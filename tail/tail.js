let assertEqual = require('../assertEqual')

let tail = function(arr) {
  let tailArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      // i won't work becaus it will exit the function as the first iteration is 0, arr.length is better because it looks though the whole array
      return [];
    }
    if (i > 0) {
      
      tailArr.push(arr[i]);
    }
  }
  //console.log(tailArr)
  return tailArr;
};

 let result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result, ["Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

assertEqual(result[1], "Labs");





module.exports = tail;


