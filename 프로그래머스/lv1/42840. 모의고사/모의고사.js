function solution(answers) {
      const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var maxCnt = [0, 0, 0];
  let arr = [];

  for (let i = 0; i < answers.length; i++) {
    if (A[i % 5] === answers[i]) {
      maxCnt[0] += 1;
    } if (B[i % 8] === answers[i]) {
      maxCnt[1] += 1;
    }
    if (C[i % 10] === answers[i]) {
      maxCnt[2] += 1;
    }
  }

  for (let x = 0; x < maxCnt.length; x++) {
    if (maxCnt[x] === Math.max(...maxCnt)) {
      arr.push(x + 1)
    }
  }
  return arr;
}