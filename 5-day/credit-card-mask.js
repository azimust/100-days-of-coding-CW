function maskify(cc) {
    return cc.slice(0, -4).replace(/\w/g, '#') + cc.slice(-4)
}
console.log(maskify('123123'));