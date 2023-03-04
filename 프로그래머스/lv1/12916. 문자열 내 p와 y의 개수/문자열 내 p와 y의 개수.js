function solution(s){
  var arr = s.split("")
  var count1 = 0;
  var count2 = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "p" || arr[i] === "P") {
      count1 += 1;
    }
    else if (arr[i] === "y" || arr[i] === "Y") {
      count2 += 1;
    }
  }
  if (count1 === 0 && count2 === 0) {
    return true;
  } else {
    if (count1 === count2) {
      return true;
    } else {
      return false;
    }
  }
}