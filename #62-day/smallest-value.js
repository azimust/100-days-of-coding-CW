function min(arr, toReturn) {
  // TODO
  if(toReturn === 'values'){
    return Math.min(...arr)
  } else {
    return arr.indexOf(Math.min(...arr))
  }
}
console.log(min([3,2,3,4,5], 'index'));