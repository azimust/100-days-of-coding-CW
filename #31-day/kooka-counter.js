var kookaCounter = function (laughing) {
    let cur = '';
    return laughing.split('a').filter(a => {
        if(a != cur) {
            cur = a;
            return a
        }
    }).length;
}
console.log(kookaCounter('haHaHa'));