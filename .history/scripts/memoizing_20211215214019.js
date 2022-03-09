const memo = {};

function add(a, b) {
  if (memo[`${a}${b}`] === undefined) {
    memo[`${a}${b}`] = a + b;
  }

  return memo[`${a}${b}`];
}
