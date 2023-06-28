function solution(s) {
    if(s.length === 4 || s.length === 6) {
        return answer = s.split("").map(Number).includes(NaN) === true ? false : true;    
    }
    else {
        return false
    }
    
}