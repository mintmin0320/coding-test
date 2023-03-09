function solution(arr1, arr2) {
    var arr3 = [];
    var arr4 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3 = [];
        for (var j = 0; j < arr1[i].length; j++) {
            arr3.push(arr1[i][j] + arr2[i][j]);
        }
        arr4.push(arr3);
    }
    return arr4;
}