function mergeStrings(first, second){
  // Your solution
    let res = '';
    if(first === second){
        return first
    }
    for(let i = 0; i < second.length; i++){
        if(first.endsWith(second.slice(0, i))){
            res = second.slice(i)
        }
    }
    return !res ? first + second : first + res
}
console.log(mergeStrings('abcde', 'cdefgh'));