function removeEveryOther(arr) {
    //your code here
    return arr.filter((item, index) => {
        return index % 2 === 0
    })
}
console.log(removeEveryOther([1, 2, 3, 5]));