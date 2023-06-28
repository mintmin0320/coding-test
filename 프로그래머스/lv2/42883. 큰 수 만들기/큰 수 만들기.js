function solution(number, k) {
    let stack = [];
    let cnt = 0;
    
    for(const value of number) {
        while(cnt < k && stack[stack.length - 1] < value) {
            stack.pop();
            cnt++;     
        }
        stack.push(value);
    }
    
    while(cnt < k) {
        stack.pop();
        cnt++;
    }
    
    return stack.join("");
}