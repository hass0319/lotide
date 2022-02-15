const assertEqual = require('../assertEqual');

let head = (arr) => {
  for (let i = 0; i <= arr.length; i ++) {
    return arr[0];
    //return (arr && arr.length) ? arr[0] : undefined; from LODASH
  }
};
module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([6]), 5);
// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// head([5,6,7]), 5;
// head([6]), 5;
// head([]), 5;
// head(["Hello", "Lighthouse", "Labs"]), "Hello";
// head([5,6,7]),6;