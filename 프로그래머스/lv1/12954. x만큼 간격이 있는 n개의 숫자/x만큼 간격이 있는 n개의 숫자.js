function solution(x, n) {
    var answer = [x];
    for (var i = 1; i < n; i++) {
        answer[i] = answer[i - 1] + x;
    }
    return answer;
}