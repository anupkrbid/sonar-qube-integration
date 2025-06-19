function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function power(a, b) {
  return Math.pow(a, b);
}

function squareRoot(a) {
  return Math.sqrt(a);
}

function absolute(a) {
  return Math.abs(a);
}

function round(a) {
  return Math.round(a);
}

function ceil(a) {
  return Math.ceil(a);
}

module.exports = { add, multiply, subtract, divide, square, cube, power, squareRoot, absolute, round, ceil };
