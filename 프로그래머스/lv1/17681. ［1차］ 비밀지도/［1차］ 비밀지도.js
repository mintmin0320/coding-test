function solution(n, arr1, arr2) {
  return answer = arr1.map((v, i) => v | arr2[i]).map(v => v.toString(2).padStart(n, 0).replaceAll("1", "#").replaceAll("0", " "));

}