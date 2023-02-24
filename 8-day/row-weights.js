function rowWeights(array){
  //your code here
  return array.reduce((a, b, i) => (a[i % 2] += b, a), [0, 0])
}
console.log(rowWeights([13, 27, 49]));