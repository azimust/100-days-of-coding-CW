let greet = function(name) {
    let upper = name.slice(0, 1).toUpperCase();
    let lower = name.slice(1).toLowerCase();
    return 'Hello' + ' ' +  upper + lower + '!';
};
console.log(greet('foDF'));