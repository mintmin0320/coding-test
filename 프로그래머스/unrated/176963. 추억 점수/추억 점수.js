function solution(name, yearning, photo) {
    const list = new Map();
    let total = 0;
    let arr = [];

    for (let i = 0; i < name.length; i++) {
        list.set(name[i], yearning[i]);
    }
  
    for (let x = 0; x < photo.length; x++) {
        for (let y = 0; y < photo[x].length; y++) {
        for (let z = 0; z < name.length; z++) {
            if (photo[x][y] === name[z]) {
                total += list.get(name[z]);
            }
        }
    }
    arr.push(total);
    total = 0;
  }
  return arr;
}