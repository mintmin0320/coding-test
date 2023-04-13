function decimal(num) {
  for (let x = 2; x <= Math.sqrt(num); x++) {
    if (num % x === 0) {
      return false;
    }
    num % x;
  }
  return true;
}

function solution(nums) {
  let n = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        n = nums[i] + nums[j] + nums[k]
        if (decimal(n)) {
          cnt += 1;
        }
      }
    }
  }
  return cnt;
}