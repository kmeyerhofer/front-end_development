var memo = {};

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  } else {
    if (memo[n]) {
     return memo[n];
   } else {
     memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
     return memo[n];
    }
  }
}
