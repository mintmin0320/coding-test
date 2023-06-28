function solution(numbers) {
    var arr = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    arr.sort((a, b) => a - b);
    var answer = new Set(arr);
    return [...answer];
}