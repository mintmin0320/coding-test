function solution(n) {
    const arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            console.log(i)
            arr.push(i);
        }
    }
    return arr.length;
}