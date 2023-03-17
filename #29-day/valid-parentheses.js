function validParentheses(parenStr) {
    // Your code here
    let cur = 0;
    for(let i = 0; i < parenStr.length; i++){
        if(parenStr[i] === '('){
            cur++;
        }else{
            cur--
        };
        if(cur < 0){
            return false
        }
    }
    return cur === 0
}
console.log(validParentheses('()'));