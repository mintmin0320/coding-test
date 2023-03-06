function solution(s) {
   if (s[0] === "-") {
    return Number("-" + s.replace("-", ""));
  } else {
    return Number(s);
  }
}