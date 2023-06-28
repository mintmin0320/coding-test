function solution(arr, divisor) {
    var answer = arr.filter(value => value % divisor === 0).sort(function (a, b)        {
        return a - b;
        });
  return answer.length === 0 ? [-1] : answer;
}