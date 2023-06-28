function solution(strings, n) {
 var arr = [];

  for (var i = 0; i < strings.length; i++) {
    arr[i] = strings[i][n] + strings[i];
  }
  
    arr.sort()

  for (var j = 0; j < strings.length; j++) {
    arr[j] = arr[j].toString().substr(1);
  }
    return arr;
}