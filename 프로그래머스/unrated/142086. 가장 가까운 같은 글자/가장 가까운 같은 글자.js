function solution(s) {
    var arr = s.split("");
    var answer = "";
    var arr2 = [];
    for (var i = 0; i < s.length; i++) {
        if (answer.lastIndexOf(arr[i]) === -1) {
            arr2[i] = -1;
        } else {
            arr2[i] = i - answer.lastIndexOf(arr[i]);
        }
        answer += arr[i];
    }
  return arr2;
}