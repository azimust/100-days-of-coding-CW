function numberToPower(number, power){
    let res = 1;
    for(let i = 0; i < power; i++){
        res *= number;
    };
    return res
}
console.log(numberToPower(2, 3));