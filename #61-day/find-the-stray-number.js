function stray(numbers) {
    for(let i in numbers) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
            return numbers[i]
        }
    }
}
console.log(stray([1, 3, 1]));