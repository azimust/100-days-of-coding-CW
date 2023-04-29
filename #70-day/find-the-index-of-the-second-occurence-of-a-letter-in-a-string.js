function secondSymbol(s, symbol) {
    // your code
    //   for(let i = 0; i < s.length; i++) {
    //     if(s[i] === symbol) {
    //         arr.push(i);
    //     }
    //   }
    //   return arr
    let firstIndex = s.indexOf(symbol);
    let secondIndex = s.indexOf(symbol, firstIndex + 1);
    return secondIndex;
}
console.log(secondSymbol('Hello', 'l'));