function sumOfRegularNumbers(arr) {
    //coding and coding..
    let is_step, is_first = true;
    let sum = 0;
    for(let i = 0; i < arr.length - 2; i++) {
        is_step = arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1];
        if(is_step) {
            sum += (is_first ? arr[i] + arr[i + 1] : 0) + arr[i + 2];
        }
        is_first =  !is_step;
    }
    return sum;
}
console.log(sumOfRegularNumbers([7, 2, -3, 3, 9, 15]));