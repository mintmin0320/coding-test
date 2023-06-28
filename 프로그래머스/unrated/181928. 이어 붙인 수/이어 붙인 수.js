function solution(num_list) {
    let num1 = [];
    let num2 = [];
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0){
            num1.push(num_list[i]);
        }
        else {
            num2.push(num_list[i]);
        }
    }
    return Number(num1.join("")) + Number(num2.join(""))
    
}