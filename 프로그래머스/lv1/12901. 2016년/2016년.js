function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
    var sum = b;
    for (var i = 0; i < a - 1; i++) {
        sum += month[i];
     }
    return week[sum % 7];
}