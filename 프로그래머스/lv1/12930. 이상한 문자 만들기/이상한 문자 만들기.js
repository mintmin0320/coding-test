function solution(s) {
    var answer = s.split(" ");

    for (var i = 0; i < answer.length; i++) {
        var cnt = answer[i].split("");
        for (var j = 0; j < cnt.length; j++) {
            if (j % 2 === 0) {
                cnt[j] = cnt[j].toUpperCase();
            } else {
                cnt[j] = cnt[j].toLowerCase();
            }
        }
    answer[i] = cnt.join("");
  }
    return answer.join(" ");
}