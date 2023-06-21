function solution(my_string) {
    let n =my_string.split(/[a-z, A-Z]/).join("")
    return [...n].map(Number).reduce((a,b) => a + b);
}