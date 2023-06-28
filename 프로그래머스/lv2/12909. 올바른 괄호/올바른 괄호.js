function solution(s){
    var arr = s.split("");
    var arr2 = [];
    
    if (arr[0] === ")" || arr[arr.length-1] === "(") return false; 
    
    for (var i = 0; i < arr.length; i++) {  
        arr2.push(arr[i]);
        if (arr[i] === ")") {
            arr2.pop();
            arr2.pop();
        }
    }
    return arr2.length === 0 ? true : false;
}