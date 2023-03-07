function solution(x) {
    var n = x.toString().split("").map(Number).reduce((a, b) => a + b);
    if(x % n === 0) {
        return true;
    }
    else {
        return false;
    }
}