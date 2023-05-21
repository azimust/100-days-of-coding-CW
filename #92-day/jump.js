function canJump(array){
    let j = array.length;
    for(let i = j - 2; i >= 0; i--) {
        if(array[i] + i >= j) {
            j = i
        }
    }
    return j === 0
  }
console.log(canJump([1, 1, 3]));  