function solution(balls, share) {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}