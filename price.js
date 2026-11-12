// Returns price after a percentage discount (0-100).
function applyDiscount(price, percent) {
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(percent) ||
    price < 0 ||
    percent < 0 ||
    percent > 100
  ) {
    throw new RangeError("invalid price or percent");
  }
  return Math.round(price * (100 - percent)) / 100;
}

// Returns price with VAT added at a percentage rate (0-100), rounded to cents.
function addVat(price, rate) {
  if (
    !Number.isFinite(price) ||
    !Number.isFinite(rate) ||
    price < 0 ||
    rate < 0 ||
    rate > 100
  ) {
    throw new RangeError("invalid price or rate");
  }
  return Math.round(price * (100 + rate)) / 100;
}

module.exports = { applyDiscount, addVat };
