var cubeChecker = function(volume, side){
    if(side < 0 || side === 0){
        return false
    }
    return side * side * side === volume ? true : false;
};

console.log(cubeChecker(0, 0));