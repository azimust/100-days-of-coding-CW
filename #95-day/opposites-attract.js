function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 + flower2) % 2 !== 0
}

console.log(lovefunc(0, 0));