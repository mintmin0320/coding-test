function solution(n) {
  n = Array.from(String(n));
  for (var i = 0; i < n.length; i++) {
    n[i] = Number(n[i]);
  }
  return n.reduce((a, b) => a + b);
}