const memo = {};

function add(a, b) {
  if (memo[`${a}${b}`] === undefined) {
    console.log("Calculating result");

    memo[`${a}${b}`] = a + b;
  }

  return memo[`${a}${b}`];
}

add(1, 2);
add(1, 2);
add(1, 2);
add(1, 4);
add(1, 3);
console.log(memo);
