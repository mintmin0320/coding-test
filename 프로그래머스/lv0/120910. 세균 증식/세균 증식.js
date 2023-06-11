function multiplication(sum) {
    return sum *= 2;
}

function solution(n, t) {
    let sum = n;
    for(let i = 0; i < t; i++){ 
        sum = multiplication(sum);
  }
    return sum;
}