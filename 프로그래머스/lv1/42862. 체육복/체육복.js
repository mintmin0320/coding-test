function solution(n, lost, reserve) {
    let arr = [];
    let cnt = 0;
    
    for(let a = 0; a < n; a++) {
        arr.push(1);
    }
    for(let b = 0; b < lost.length; b++) {
        arr[lost[b] - 1] = 0; 
    }
    for(let c = 0; c < reserve.length; c++) {
        arr[reserve[c] - 1] += 1; 
    }
    
    for(let i = 0; i < n; i++) {
        if(arr[i] === 0 && arr[i - 1] === 2) {
            arr[i-1] = 1;
            arr[i] = 1;
        } else if(arr[i] === 0 && arr[i + 1] === 2) {
            arr[i+1] = 1;
            arr[i] = 1;
        }
    }
    
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] > 0) cnt++;
    }
    return cnt;
}