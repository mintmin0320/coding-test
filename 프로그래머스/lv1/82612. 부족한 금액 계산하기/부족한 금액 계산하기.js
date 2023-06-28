function solution(price, money, count) {
  var answer = 0;
  for (count; count >= 1; count--) {
    answer += price * count;
  }
  if(money >= answer) {
    return 0;
  }else {
    return answer = answer - money;
  }
}