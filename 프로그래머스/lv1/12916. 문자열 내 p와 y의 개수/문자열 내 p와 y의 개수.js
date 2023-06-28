function solution(s){
  var arr = s.toUpperCase().split("");
  var count1 = arr.filter(v => v === "P").length;
  var count2 = arr.filter(v => v === "Y").length;

  if(count1 === count2) {
    return true;
  }
  else {
    if(count1 === 0 && count2 === 0) {
      return true;
    }else {
      return false;
    }
  }
}