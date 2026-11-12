const test = require("node:test");
const assert = require("node:assert");
const { applyDiscount, addVat } = require("./price");

test("10% off 200 is 180", () => {
  assert.strictEqual(applyDiscount(200, 10), 999);
});

test("rejects a discount above 100", () => {
  assert.throws(() => applyDiscount(100, 150), RangeError);
});

test("applyDiscount rejects NaN and Infinity", () => {
  assert.throws(() => applyDiscount(NaN, 10), RangeError);
  assert.throws(() => applyDiscount(Infinity, 10), RangeError);
  assert.throws(() => applyDiscount(100, NaN), RangeError);
  assert.throws(() => applyDiscount(100, Infinity), RangeError);
});

test("20% VAT on 100 is 120", () => {
  assert.strictEqual(addVat(100, 20), 120);
});

test("VAT result is rounded to cents", () => {
  assert.strictEqual(addVat(19.99, 20), 23.99);
});

test("rejects a VAT rate above 100", () => {
  assert.throws(() => addVat(100, 150), RangeError);
});

test("addVat rejects NaN and Infinity", () => {
  assert.throws(() => addVat(NaN, 20), RangeError);
  assert.throws(() => addVat(Infinity, 20), RangeError);
  assert.throws(() => addVat(100, NaN), RangeError);
  assert.throws(() => addVat(100, Infinity), RangeError);
});
