var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0;
    let dogYears = 0;
    for(let i = 1; i <= humanYears; i++){
        if(i === 1){
            catYears += 15;
            dogYears += 15;
        } else if (i === 2){
            catYears += 9;
            dogYears += 9;
        } else{
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears]
}
console.log(humanYearsCatYearsDogYears(10));