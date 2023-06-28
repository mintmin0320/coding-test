function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    for (var i = 0; i < score.length; i += m) {
        if (score.slice(i, i + m).length === m){
          answer += Math.min.apply(Math, score.slice(i, i + m)) * m;        
        }
    }
    return answer;
}