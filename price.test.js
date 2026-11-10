const test = require("node:test");
const assert = require("node:assert");
const { applyDiscount } = require("./price");

test("10% off 200 is 180", () => {
  assert.strictEqual(applyDiscount(200, 10), 180);
});

test("rejects a discount above 100", () => {
  assert.throws(() => applyDiscount(100, 150), RangeError);
});
