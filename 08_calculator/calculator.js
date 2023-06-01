const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(ele => {
    sum += ele;
  });
  return sum;
};

const multiply = function(arr) {
  let res = 1;
  arr.forEach(ele => {
    res *= ele;
  });
  return res;
};

const power = function(bas, pow) {
  let res = 1;
  for (let i = 0; i < pow; i++) {
    res *= bas;
  }
  return res;
};

const factorial = function(num) {
  if (num < 0) {
    return;
  }
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac *= i;
  }
  return fac;
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
