function solution(my_string) {
    return [...my_string].filter((v) => v !== 'u' && v !== "i" && v !== "o" && v !== "a"&& v !== "e").join("")
}