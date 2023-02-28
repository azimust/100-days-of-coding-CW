function incrementString (strng) {
    // return incrementedString
    return strng.replace(/[0-8]?9*$/, m => ++m)
}
console.log(incrementString('foo009'));