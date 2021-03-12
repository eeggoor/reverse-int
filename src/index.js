module.exports = function reverse (n) {
  return Number.parseInt((n + '').split('').reverse().join(''), 10);
}
