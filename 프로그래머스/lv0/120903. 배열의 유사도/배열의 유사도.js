function solution(s1, s2) {
    let cnt = 0;
    for(let i = 0; i < s2.length; i++) {
        if(s2.indexOf(s1[i]) !== -1) {
            cnt++;
        }
    }
    return cnt;
}