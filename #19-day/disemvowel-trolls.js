function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));