// const assertEqual = require ('../../assertEqual')
// const tail = require('../tail')




//  let result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

// assertEqual(result.length, 2); // ensure we get back two elements

// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

// assertEqual(result[1], "Labs");

//  const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail');

let result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns true for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]) , (["Lighthouse", "Labs"]))});
  
  it("returns 2 for tail.length", () => {
    assert.strictEqual((result.length), 2); 
  });
  it 
});