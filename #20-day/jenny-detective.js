function missingWord(nums, str) {
    // Jenny needs your help...
    let code = [];
    const arr = nums.sort((a,b)=>a-b);
    let w = str.replace(/[ ]/g, '').split('');
    for(let i = 0; i < arr.length; i++){
        code.push(w[arr[i]]);
    };
    return code.includes(undefined) ? 'No mission today' : code.join('').toLowerCase();
}
console.log(missingWord([52, 0, 3], "I love you"));