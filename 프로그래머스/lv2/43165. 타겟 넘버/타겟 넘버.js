function solution(numbers, target) {
    let answer = 0; 

    function dfs(level, sum) {
        if(level === numbers.length) { // 재귀 종료 조건 설정
            if(sum === target){
              answer += 1; // target과 일치하면 answer +1  
            };
            
            return; // 재귀 함수 종료
        };
        
        dfs(level + 1, sum + numbers[level]);
        dfs(level + 1, sum - numbers[level]);
    };
    
    dfs(0,0); 
    
    return answer;
};