function solution(arr){
    let answer = [];
    let temp = 0;
    
    arr.forEach((v,i, arr) => {
        if(answer[answer.length-1] !== v){
            answer.push(v);
        }
    });
    
    return answer;
}