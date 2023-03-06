function trim(str, size) {
    if(str.length <= size){
        return str
    };

    let real = str.slice(0, size);

    return `${real.length < 4 ? real : real.slice(0, -3)}...`;
}

console.log(trim("Hey", 3));