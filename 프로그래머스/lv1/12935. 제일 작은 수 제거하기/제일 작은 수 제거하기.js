function solution(arr) {
    var minValue = Math.min.apply(null, arr);
    return arr = arr.length > 1 ? arr.filter(v => v > minValue) : [-1];

}