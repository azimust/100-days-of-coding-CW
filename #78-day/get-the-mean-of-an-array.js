function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
}
console.log(getAverage([1,5,87,45,8,8]));