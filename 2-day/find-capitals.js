var capitals = function (word) {
	// Write your code here
    let arr = []
    word.split('').map((el) => {
        if(el === el.toUpperCase()){
            arr.push(word.indexOf(el))
        }
    })
    return arr
};
console.log(capitals('CodEWaRs'));