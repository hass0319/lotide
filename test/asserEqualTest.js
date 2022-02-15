// const assertEqual = require('../assertEqual');

// assertEqual("lighthouse Labs","Bootcamp");
// assertEqual("lighthouse Labs","lighthouse Labs");
// assertEqual(1,1);
// assertEqual(1,2);


const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');



describe("#assertEqual", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(assertEqual(("lighthouse Labs","lighthouse Labs")))})
  
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(assertEqual(1,2)); 
  });
});