function sortArray(array) {
    // Return a sorted array.
    let odd = array.filter((x) => x % 2 != 0).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));