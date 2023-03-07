function solution(arr, divisor) {
    var answer = arr.filter(value => value % divisor === 0).sort(function (a, b)        {
        return a - b;
        });
  
    if(answer.length === 0) {
        answer[0] = -1;
    }
  return answer;
}