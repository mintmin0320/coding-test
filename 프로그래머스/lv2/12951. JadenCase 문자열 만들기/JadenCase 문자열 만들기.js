function solution(s) {
    arr = s.split(" ");
    for (var i = 0; i < arr.length; i++) {
    arr[i] ? arr[i] = arr[i][0].toUpperCase() + arr[i].toLowerCase().slice(1) : ''
  }
  return arr.join(" ");
}