function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    var cnt = 0;
    for (var i = 0; i < d.length; i++) {
        if (budget - d[i] < 0) { break; }
            budget -= d[i];
            cnt += 1;
    }
  return cnt;
}