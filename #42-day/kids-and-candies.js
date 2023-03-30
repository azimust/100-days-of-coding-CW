function candiesToBuy(kids) {
    let total = 1;
    let lastTotal = 1;
    for(let i = 1; i <= kids; i++){
        while(total % i !== 0){
            total += lastTotal;
        }
        lastTotal = total
    }
    return total
}
console.log(candiesToBuy(5));