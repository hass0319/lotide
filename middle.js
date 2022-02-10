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

const middle = function(arr) {
  let even = [];
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    let slicer = (arr.length - 1) / 2;
    //console.log("slicer: " + slicer);
    even.push(arr[slicer]);
  }
  if (arr.length % 2 === 0) {
    //let even = []
    let slicer = (arr.length) / 2;
    //console.log("slicer: " + slicer);
    
    even.push(arr[slicer - 1] , arr[slicer]);
  }
  return even;
};

// //For arrays with one or two elements, there is no middle. Return an empty array.
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
// //For arrays with ODD number of elements, an array containing a SINGLE middle element should be RETURNED.
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

// //For arrays with an EVEN number of elements, an array containing the TWO elements in the middle should be RETURNED
console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


//method 1........
// const middle = function (arr) {
// if(arr.length <= 2) {
//   return [];
//  }
//    let sliced = [];
//  if(arr.length%2!=0){
//    let slicer = (arr.length-1)/2;
//    //console.log("slicer: "+slicer);

//      sliced = arr.slice(slicer);
//      //console.log("sliced: " +sliced)
     
//      while(slicer--){
//        sliced.pop()
//      }
//      //console.log("sliced"+sliced)
//    }
//    return sliced;
// }