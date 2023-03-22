function divCon(x){
    let num = [];
    let str = [];
    let strToNum = [];
    x.filter(v => typeof v === 'string' ? str.push(v) : num.push(v));
    str.map(v => strToNum.push(parseInt(v)));
    return num.reduce((a, b) => a + b, 0) - strToNum.reduce((a, b) => a + b, 0);
}
console.log(divCon([9, 3, '7', '3']));