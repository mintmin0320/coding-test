function solution(lottos, win_nums) {
    const arr1 = lottos.sort((a,b) => a -b).filter(v => v !== 0);
    const arr2 = win_nums.sort((a,b) => a -b);
    const map = new Map();
    const map2 = new Map();
    let cnt = 0;
    
    arr1.forEach((n, i) => map.set(i, n));
    arr2.forEach((n, i) => map2.set(i, n));
    
    if (!arr1.length) return [1,6];
    
    for(let i = 0; i < map.size; i++) {
        for(let j = 0; j < map2.size; j++) {
            if(map.get(i) === map2.get(j)){
                cnt++;
                continue;
            }
        } 
    }
    if(cnt === 0) return [6, 6];
    return [7 - (cnt + (6 - arr1.length)), 7 - cnt];
}