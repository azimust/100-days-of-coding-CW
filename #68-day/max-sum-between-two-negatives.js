function maxSumBetweenTwoNegatives(a) {
    let i = 0; c = 0; m = -1;
    while(i < a.length && a[i] >= 0) i++;
    while(++i < a.length) {
        if(a[i] < 0) {
            m = m < c ? c : m; c = 0;
        } else {
            c += a[i];
        }
    }
    return m
}
console.log(maxSumBetweenTwoNegatives([4, -1, 6, -2, 3, 5, -7, 7]));