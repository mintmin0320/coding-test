function solution(num) {
    var cnt = 0;
  do {
    if (cnt >= 500) {
      return -1;
    }
      else if(num === 1) {
      return 0;
    }
    else if (num % 2 === 0) {
      num /= 2;
      cnt += 1;
    } else {
      num = num * 3 + 1;
      cnt += 1;
    }
  } while (num !== 1);
    return cnt;
}