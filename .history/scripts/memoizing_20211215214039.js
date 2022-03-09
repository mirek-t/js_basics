const memo = {};

function add(a, b) {
  if (memo[`${a}${b}`] === undefined) {
    console.log("Calculating result");

    memo[`${a}${b}`] = a + b;
  }

  return memo[`${a}${b}`];
}
