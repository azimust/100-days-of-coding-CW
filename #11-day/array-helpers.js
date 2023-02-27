Array.prototype.square = function() {
    return this.map((el) => el * el);
};
Array.prototype.cube = function() {
    return this.map((el) => el * el * el);
};
Array.prototype.average = function() {
    return this.reduce((a, b) => a + b)/this.length;
};
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
};
Array.prototype.even = function() {
    return this.filter((el) => el % 2 === 0);
};
Array.prototype.odd = function() {
    return this.filter((el) => el % 2 !== 0);
};