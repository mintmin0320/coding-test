function solution(n) {
    if (n % Math.sqrt(n) === 0) {
    return Math.pow((Math.sqrt(n) + 1), 2);
  } else {
    return -1;
  }
}