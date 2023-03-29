function solution(number, limit, power) {
    var cnt = 2;
  var answer = 1;
  for (var i = 2; i <= number; i++) {
    if (Math.floor(Math.sqrt(i)) * Math.floor(Math.sqrt(i)) === i) cnt--;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        cnt += 2;
        if (cnt > limit) {
          cnt = power;
          break;
        }
      }
    }
    answer += cnt;
    cnt = 2;
  }
  
  return answer;
}