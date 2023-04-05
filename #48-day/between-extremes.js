function betweenExtremes(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let btw = max - min;
    return btw;
}
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));