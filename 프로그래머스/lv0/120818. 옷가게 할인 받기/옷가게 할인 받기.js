function solution(price) {
    if(price >= 500000) return Math.floor(price - (20/100 * price));
    else if(price >= 300000) return Math.floor(price - (10/100 * price));
    else if(price >= 100000) return Math.floor(price - (5/100 * price));
    else return price;
        

}