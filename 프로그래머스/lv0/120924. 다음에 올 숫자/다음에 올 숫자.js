function solution(common) {
  var pattern = common[1] - common[0]
  var pattern2 = common[2] - common[1]

  if (pattern === pattern2) {
    return common[common.length - 1] + pattern;
  }
  else {
    return (common[common.length - 1]) * (pattern2 / pattern);
  }
}