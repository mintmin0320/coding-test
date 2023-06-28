function solution(n, m) {

  for (var i = m; i >= 1; i--) {
    if ((m % i === 0) && (n % i === 0)) {
      return arr = [i, (m / i) * n];   
    }
  }

}