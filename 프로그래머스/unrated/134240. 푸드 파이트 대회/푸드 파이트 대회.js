function solution(food) {
    var arr = food.map(String);
    var answer = "";
    for (var i = 1; i < food.length; i++) {
        answer += arr[i].repeat(Math.floor(food[i] / 2)).replaceAll(arr[i], i)
    }
    return answer + "0" + answer.split("").reverse().join("");
}