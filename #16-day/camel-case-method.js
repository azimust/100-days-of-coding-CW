String.prototype.camelCase=function(){
    //your code here
    let arr = [];
    this.trim().split(' ').map((e) => {
        let slice = e.slice(0, 1).toUpperCase() + e.slice(1);
        arr.push(slice);
    })
    return arr.join('');
}
console.log('hello case'.camelCase());