function solution(num_list) {
    return [num_list.filter((x) => x % 2 === 0).length, num_list.length - num_list.filter((x) => x % 2 === 0).length]
    
}