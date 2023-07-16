const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map(Number);
let cnt = 0;
let max = 0;

while (arr.length !== 0) {
  num = arr.pop();

  if (num > max) {
    max = num;
    cnt += 1;
  };
};

console.log(cnt);
