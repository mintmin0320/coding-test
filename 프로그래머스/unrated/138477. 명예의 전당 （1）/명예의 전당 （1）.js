function solution(k, score) {
    let arr = [];
    let answer = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            arr.push(score[i])
            answer.push(Math.min(...arr));
        } else {
            if (score[i] >= arr[k - 1]) {
                arr.pop();
                arr.push(score[i]);
                answer.push(Math.min(...arr));
            } else if (score[i] < arr[k - 1]) {
                answer.push(Math.min(...arr));
            }
        }
        arr.sort((a, b) => b - a);
    }
    return answer;
}