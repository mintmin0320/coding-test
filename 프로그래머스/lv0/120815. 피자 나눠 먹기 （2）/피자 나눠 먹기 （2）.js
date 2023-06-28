function solution(n) {
    if(n % 6 === 0) {
        return n / 6;
    }
    for(let i = 1; i <= n * 6; i++) {
        if(i % n === 0 && i % 6 === 0) {
            return i / 6;
        }
    }
}