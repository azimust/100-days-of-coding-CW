function isPalindrome(x) {
  // your code here
  return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}
console.log(isPalindrome('sas'));