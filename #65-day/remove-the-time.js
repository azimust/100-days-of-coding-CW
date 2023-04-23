function shortenToDate(longDate) {
    // your code here
    return longDate.split(',').at(0)
}
console.log(shortenToDate("Friday May 2, 9am"));