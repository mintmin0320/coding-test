function solution(array) {
    array.sort((a, b) => a - b);
    var n = Math.floor(array.length / 2);
    return array[n];
}