function twoSum(numbers, target) {
    // ...
    for(let i = 0; i < numbers.length; i++){
        for(let k = i + 1; k < numbers.length; k++){
            if(numbers[i] + numbers[k] === target){
                return [i, k]
            }
        }
    }
}
console.log(twoSum([2, 2, 3], 4));