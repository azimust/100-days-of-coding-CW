function strCount(str, letter) {
    // let sum = [];
    // str.split('').map(e => {
    //     if(e === letter) sum.push(e);
    // });
    // return sum.length;
    return str.split(letter).length - 1;
}
console.log(strCount('hello', 'o'));