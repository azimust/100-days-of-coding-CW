function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  let arr = arrays.filter((e) => e.every((e, i, arr) => typeof e === typeof arr[0]));
  return arr.filter((e) => e.length !== 0)
}
console.log(filterHomogenous([1, 2, 'b'], [4]));