function solution(a, b) {
 return result = a.map((v, i) => { return v * b[i]; }).reduce((a, b) => a + b);
}