function convertPalindromes(numbers) {
    let arr = [];
    numbers.map(v => {
        let num = '';
        num += v;
        let revNum = parseInt(num.split('').reverse().join(''))

        if(v === revNum){
            arr.push(1)
        } else {
            arr.push(0)
        }
    })
    return arr
};
console.log(convertPalindromes([45, 21, 303, 56]));