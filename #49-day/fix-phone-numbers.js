function isItANum(str) {
    // your code here;
    // let arr = [];
    // str.split('').map(v => {
    //     if(parseInt(v) || v === '0') {
    //         arr.push(v)
    //     }
    // });
    // if (arr[0] === '0') {
    //     if(arr.length <= 11) {
    //         return arr.join('')
    //     }
    //     else {
    //         return 'Not a phone number'
    //     }
    // }
    // else {
    //     return 'Not a phone number'
    // }

    let r = str.split('').filter(c => '0123456789'.includes(c)).join('');
    return r.length === 11 && r[0] === '0' && r || 'Not a phone number';
}
console.log(isItANum("v   uf  f tt2eg qe0b 8rtyq4eyq564()(((((165"));