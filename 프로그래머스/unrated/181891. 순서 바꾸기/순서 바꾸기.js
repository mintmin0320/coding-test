function solution(num_list, n) {
    console.log()
    console.log()
    
    return [...num_list.slice(n), ...num_list.slice(0,n)]
}