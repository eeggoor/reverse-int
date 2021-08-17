module.exports = function reverse (n) {
  n = n + '';
  return Number.parseInt(n.split('').reverse().join(''), 10);
}
