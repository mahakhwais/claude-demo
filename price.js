// Returns price after a percentage discount (0-100).
function applyDiscount(price, percent) {
  if (price < 0 || percent < 0 || percent > 100) {
    throw new RangeError("invalid price or percent");
  }
  return Math.round(price * (100 - percent)) / 100;
}

module.exports = { applyDiscount };
