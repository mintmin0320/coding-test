function solution(n) {
     return Number.parseInt(n.toString(3).split("").reverse().map(Number).join(""), 3);

}