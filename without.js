// const eqArrays = require('./eqArrays');

const without = (source, itemsToRemove) =>{
  let output = [];
  source.forEach((el) => {
    if (!itemsToRemove.includes(el) && !output.includes(el)) {
      return output.push(el);
    }
  });
  console.log(`output => ${output}`);
};

module.exports = without;


without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]);