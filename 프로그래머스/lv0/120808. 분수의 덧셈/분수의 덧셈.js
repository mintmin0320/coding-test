function solution(numer1, denom1, numer2, denom2) {
   var arr = [((denom1 * numer2) + (denom2 * numer1)), (denom1 * denom2)];
  var n = 0;
  for (var i = 1; i <= denom1 * denom2; i++) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      n = i;
    }
  }
  return [arr[0] / n, arr[1] / n]




}