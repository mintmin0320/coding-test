function solution(nums) {
     var arr = new Set(nums);
     return arr.size > nums.length / 2 ? nums.length / 2 : arr.size;
}