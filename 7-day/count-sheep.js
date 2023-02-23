var countSheep = function (num){
    //your code here
    let str = '';
    for(let i = 1; i <= num; i++){
        str += i.toString() + ' sheep...'
    }
    if(str === ''){
        return undefined
    }
    return str;
}
console.log(countSheep(''));