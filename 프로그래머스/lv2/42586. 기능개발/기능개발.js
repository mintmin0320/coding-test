function solution(progresses, speeds) {
    let arr = [];
    let temp = 0;

    progresses.forEach((v, i) => {
        let n = Math.ceil((100 - v) / speeds[i]);
        
        
        if(n > temp) {
            arr.push(1);
            temp = n;
        }else {
            arr[arr.length -1]++;
        }
        console.log(n)
    })
    
    return arr;    
}
//96 94 33