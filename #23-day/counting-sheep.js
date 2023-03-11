function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let arr = [];
    arrayOfSheep.map((v) => {
        if(v === true){
            arr.push(v)
        };
    });
    return arr.length;
}
console.log(countSheeps(
    [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true]
));