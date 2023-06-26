function solution(s) {
    let x = s[0];
    let cnt1 = 0;
    let cnt2 = 0;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(cnt1 === cnt2) {
            x = s[i+1];
            cnt1 = 0;
            cnt2 = 0;
            answer += 1;
            console.log(i)
        }
        if(s[i] === x) cnt1 += 1;    
        if(s[i] !== x) cnt2 += 1;
    
    }
    if(cnt1 !== cnt2) answer += 0;
    return answer;
}