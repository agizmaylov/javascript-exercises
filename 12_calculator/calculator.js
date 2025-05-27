const add = function(n, m) {
	return n + m;
};

const subtract = function(n, m) {
	return n - m;
};

const sum = function(nums) {
	return nums.reduce((sum, n) => sum + n, 0);
};

const multiply = function(nums) {
  return nums.reduce((prod, n) => prod * n, 1);
};

const power = function(n, pow) {
  return n ** pow;
};

const factorial = function(n) {
  // if (n === 1 || n === 0) return 1;
  // return n * factorial(n - 1);

  let prod = 1;
  for (; n > 1; n--) {
    prod *= n;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
