function solution(s){
    let arr = [...s];
    let cnt = 0;
    
    if(arr === ')' || arr[arr.length-1] === '(') return false;
    
    for(const x of arr){
        if(x === '(') {
            cnt += 1;
        }else {
            cnt -= 1;
        }
        
        if(cnt < 0) return false;
    }
    return !cnt;
}