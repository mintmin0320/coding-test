# 문제 1번

* 문제 레벨 : 0
* 문제 종류 : 요구사항 구현
* 문제 링크 : https://jsalgo.co.kr/?page=1
* 통과 여부 : Y

```javascript
function solution(data){
	for(let i = 0; i < data.length; i++){
    	data[i] = data[i].replace(/ /g, '').replaceAll('+', '1').replaceAll('-', '0')
        data[i] = String.fromCharCode(parseInt(data[i], 2));
    }
    return data.join("");
}
```

