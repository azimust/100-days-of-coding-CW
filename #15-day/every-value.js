const arrCheck = value => {
    // return value.every((e) => Array.isArray(e));
    return value.every(Array.isArray);
}
console.log(arrCheck([[1],[2],{}]));