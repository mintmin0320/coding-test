function solution(a, b, n) {
    var cnt = 0;
    while (n >= a) {
        x = Math.floor((n / a)) * b
        n = x + (n % a);
        cnt += x;
    }
    return cnt;
}