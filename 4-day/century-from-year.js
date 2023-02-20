function century(year) {
    let res = 0;
    for(let i = 0; i <= year; i++){
        if(i % 100 === 0){
            res++
        }
    }
    return res
}
console.log(century(2020));