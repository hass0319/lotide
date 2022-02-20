// const eqArrays = require('./eqArrays');

let without = (source, itemsToRemove) =>{
  let output = [];
  source.forEach((el) => {
    if (!itemsToRemove.includes(el)) return output.push(el);
  });
  console.log(`output => ${output}`);
};
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]);