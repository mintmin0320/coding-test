function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var sum = b;
    var answer = "";
    for (var i = 0; i < a - 1; i++) {
        sum += month[i];
     }
    switch (sum % 7) {
        case 0:
            answer = "THU";
            break;
        case 1:
            answer = "FRI";
            break;
        case 2:
            answer = "SAT";
            break;
        case 3:
            answer = "SUN";
            break;
        case 4:
            answer = "MON";
            break;
        case 5:
            answer = "TUE";
            break;
        case 6:
            answer = "WED";
            break;
      }
      return answer;
}