function solution(array) {
   var arr = array.map(String).join("");
  var cnt = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "7") {
      cnt += 1;
    }
  }
  return cnt;
}