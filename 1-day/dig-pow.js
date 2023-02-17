function digPow(n, p){
    // ...
    let arr = []
    let s = String(n).split('');
    s.map((el) => {
        let a = (parseInt(el));
        arr.push(Math.pow(a, p++))
    })

    let res = arr.reduce((n, acc) => n + acc)
    if(res % n === 0) {
        return res / n;
    }else{
        return -1
    }

}
console.log(digPow(92, 1));