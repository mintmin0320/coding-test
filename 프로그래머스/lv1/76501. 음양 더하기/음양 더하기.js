function solution(absolutes, signs) {
    for (var i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      absolutes[i] = absolutes[i] * -1;
    }
  }
  return absolutes.reduce((a, b) => a + b);
}