function removeParentheses(s){
    let res = '';
    let count = 0;
    for(let i of s) {
        if(i == '(') count++;
        if(count === 0) res += i;
        if(i == ')') count--;
    }
    return res
}
console.log(removeParentheses('example(unwanted thing)example'));