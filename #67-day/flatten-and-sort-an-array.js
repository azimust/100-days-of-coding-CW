function flattenAndSort(array) {
    // Good luck, brave code warrior!
    let sortArr = []
    array.map(arr => {
        sortArr.push(...arr.concat())
    });
    return sortArr.sort((a, b) => a - b);
}
console.log(flattenAndSort([[1, 3, 5], [6, 9, 7]]));