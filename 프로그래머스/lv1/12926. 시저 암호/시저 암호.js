function solution(s, n) {
    s = s.split("");
    var x = 0;
    var arr = [];

  for (var i = 0; i < s.length; i++) {
    x = s[i].charCodeAt(0);
    if (x === 32) {
      arr.push(String.fromCharCode(32));
      continue;
    }
    else if (x + n > 122) {
      arr[i] = String.fromCharCode(96 + x + n - 122);
      continue;
    }
    else if (x < 97 && x + n > 90) {
      arr[i] = String.fromCharCode(64 + x + n - 90);
      continue;
    }
    else {
      arr[i] = String.fromCharCode(x + n);
    }
  }
    return arr.join("");
}