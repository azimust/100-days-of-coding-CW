function productArray(numbers){
    //your code here
    return numbers.map(x => numbers.reduce((a, b) => a * b / x))
}
console.log(productArray([12, 20]));