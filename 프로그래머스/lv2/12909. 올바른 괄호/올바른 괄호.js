function solution(s){
    let stack = [];
    
    if(s[0] === ')' || s[s.length-1] === '(') return false; 
    
    for(const v of s){
        if(v === '(') stack.push(v);
        else {
            stack.pop();
        }
    }
    if(stack.length > 0) return false;
    return true;
}