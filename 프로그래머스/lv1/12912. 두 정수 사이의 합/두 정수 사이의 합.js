function solution(a, b) {
    var answer = 0;
      if (a === b) {
        return a;
      }
      else if (a > b) {
        for (b; b <= a; b++) {
          answer += b;
        }
      }
      else if (a < b) {
        for (a; a <= b; a++) {
          answer += a;
        }
      }
    return answer;
}