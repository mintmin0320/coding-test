function solution(n) {
  var answer = 0;
  for (n; n >= 2; n--) {
    if (n === 2 || n === 3 || n === 5 || n === 7) {
      answer += 1;
      continue;
    }
    for (var i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        break;
      }
      else if (Math.floor(Math.sqrt(n)) === i) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}