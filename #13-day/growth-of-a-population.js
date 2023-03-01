function nbYear(p0, percent, aug, p) {
    // your code
    let count = 0;
    for(count; p0 < p; count++){
      return p0 += p0 * percent / 100 + aug | 0
    }
    return count
}
console.log(nbYear(1500, 5, 100, 5000));