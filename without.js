let eqArrays = (arr1, arr2) => {
  return arr1[0] === arr2[0] ?
    (arr1[1] === arr2[1] ?
      (arr1[2] === arr2[2] ?
        true : false) : false) : false;
};

let assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ?
    return ""
    : console.log(`🛑 Assertion failed: ${arr1} !== ${arr2}`);
};

let without = (source, itemsToRemove) =>{
  let sour = source.length;
  let remo = itemsToRemove.length;

  let removed= [];
  console.log('source: '+source)
  console.log(`${remo} ${sour}`)
  source.slice(remo, sour );
  console.log(source.slice(remo, sour ))
  removed.push(source.slice(remo, sour ))
  console.log("removed: "+removed);
}
without(assertArraysEqual([1, 2, 3], [1]))
without(assertArraysEqual(["1", "2", "3"], [1, 2, "3"]))