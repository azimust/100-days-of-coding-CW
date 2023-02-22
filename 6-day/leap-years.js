function isLeapYear(year) {
    // TODO
    if(year % 100 !== 0 && year % 4 === 0 || year % 400 === 0){
        return true
    }else{
        return false
    }
}
console.log(isLeapYear(1900));