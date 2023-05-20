function findAverage(array) {
  // your code here
  if(array.length === 0) {
    return 0
  }
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(findAverage([1,2,3,4]));