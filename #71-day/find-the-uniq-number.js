function findUniq(arr) {
    // do magic
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
}
console.log(findUniq([1, 7, 6, 1, 1, 1]));  