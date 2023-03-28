function solution(nums) {
    var arr = new Set(nums);
    return answer = [...arr].length > nums.length / 2 ? nums.length / 2 : [...arr].length;
}