
const assert = require('chai').assert;
const tail   = require('../tail/tail');

let result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns true for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]) , (["Lighthouse", "Labs"]));
  });
  
  it("returns 2 for tail.length", () => {
    assert.strictEqual((result.length), 2);
  });
  it;
});