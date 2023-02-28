function hexFormat(n){
    return n.length < 2 ? '0' + n : n;
}
function rgb(r, g, b){
    // complete this function
    let rgbArray = [r, g, b];
    let hex = '';
    for(let n of rgbArray){
        if(n < 0){
            n = 0;
        }else if(n > 255){
            n = 255
        };

        hex += hexFormat(parseInt(n, 10).toString(16).toUpperCase())
    }
    return hex;
}
console.log(rgb(0, 0, 0));