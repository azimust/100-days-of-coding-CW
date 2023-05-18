function setReducer(input) {
    // code here
    while(input.length - 1) {
        input = input.reduce((a, v, i) => {
            if(v != input[i - 1]) a.push(1);
            else a[a.length - 1]++;
            return a
        }, [])
    }
    return input.pop()
}
console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]));