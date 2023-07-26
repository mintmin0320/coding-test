const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const map = input.map((v) => v.split("").map(Number));
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let TotalCnt = 0;
let cnt = 0;
let cntArr = [];

function DFS(x, y) {
  map[x][y] = 0;
  cnt += 1;

  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && nx < N && ny >= 0 && ny < N && map[nx][ny] === 1) {
      DFS(nx, ny);
    };
  };
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      DFS(i, j);
      TotalCnt += 1;
      cntArr.push(cnt);
      cnt = 0;
    };
  };
};

console.log(TotalCnt);

cntArr.sort((a, b) => a - b);

for (const v of cntArr) {
    console.log(v);
};
