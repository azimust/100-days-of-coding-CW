function dbSort(a){
    // Code here
    let word = a.filter((v) => typeof v === 'string').sort();
    let number = a.filter((v) => typeof v === 'number').sort((a, b) => a - b);
    return number.concat(word);
}
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 3, 2, 2]));