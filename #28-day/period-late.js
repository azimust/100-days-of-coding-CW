function periodIsLate(last, today, cycleLength) {
    let per_day = 1000 * 60 * 60 * 24;
    return (today - last) / per_day > cycleLength;
}
console.log(periodIsLate(2016, 6, 13));