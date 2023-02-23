function insertDash(num) {
    //code me
    let arr = []
    let newArr =  num.toString().split('');

    for(let i = 0; i < newArr.length; i++){
        arr.push(newArr[i])
        if(newArr[i] % 2 !== 0 && newArr[i + 1] % 2 !== 0){
            arr.push('-')
        }
    }
    if(arr[arr.length - 1] === '-'){
        arr.pop()
    }

    return arr.join('')
 }
console.log(insertDash(1003567));