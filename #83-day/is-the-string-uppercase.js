String.prototype.isUpperCase = function() {
  // your code here
  if(this.length === 0) {
    return false
  }
  for(let i = 0; i < this.length; i++) {
    if(this[i] !== this[i].toUpperCase()){
        return false
    }
  }
  return true
}
let str = 'Hello';
str.isUpperCase()
