function createPhoneNumber(numbers){
  let bracket = numbers.slice(0, 3).join('');
  let num1 = numbers.slice(3, 6).join('');
  let num2 = numbers.slice(6, 10).join('')
  let str = `(${bracket}) ${num1}-${num2}`
  return str
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));