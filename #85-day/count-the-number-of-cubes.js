function countSquares(cuts) {
    return cuts ? 6 * cuts * cuts + 2 : 1
}
console.log(countSquares(16));