function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((a,b) => a.length - b.length)
};
console.log(sortByLength(["Beg", "Life", "I", "To"]));