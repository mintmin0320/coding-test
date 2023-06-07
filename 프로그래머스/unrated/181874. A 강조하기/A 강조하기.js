function solution(myString) {
    let str = myString.toLowerCase();
    return [...str].map(v => v === 'a' ? v.toUpperCase() : v).join('');
}