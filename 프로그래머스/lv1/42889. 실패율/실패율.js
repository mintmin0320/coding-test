function solution(N, stages) {
  let answer = new Map();
  let arr = stages.sort((a, b) => a - b).filter((v) => v < N);
  let cnt = 0;
  let total = stages.length;
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i + 1 === stages[j]) {
        cnt += 1;
      }
    }
  
    answer.set(i + 1, cnt / total);
    total -= cnt;
    cnt = 0;
  }
  
  const mapSort1 = new Map([...answer.entries()].sort((a, b) => b[1] - a[1]));
  return [...mapSort1.keys()];
}