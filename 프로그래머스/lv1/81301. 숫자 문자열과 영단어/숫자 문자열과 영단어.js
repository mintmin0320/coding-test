function solution(s) {
   var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;
  for (var i = 0; i < num.length; i++) {
    var arr = answer.split(num[i]);
    answer = arr.join(i);
  }
  return Number(answer)
}