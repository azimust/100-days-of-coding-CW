class Dictionary {
    constructor() {
      // your code
      this.dict = {};
    }
    
    newEntry(key, value) {
      // your code
      this.dict[key] = value
    }
    
    look(key) {
      // your code
      return this.dict[key] || `Can\'t find entry for ${key}`;
    }
}
let d = new Dictionary();

d.newEntry("Apple");

console.log(d.look("Apple"));