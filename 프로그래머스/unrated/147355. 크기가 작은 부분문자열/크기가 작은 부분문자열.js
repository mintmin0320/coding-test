function solution(t, p) {
    var arr = [];
    for (var i = 0; i < t.length; i++) {
        if (t.slice(i, i + p.length).length === p.length) {
            arr[i] = t.slice(i, i + p.length);
        }
    }
    return arr.map(Number).filter(x => x <= p).length;
}