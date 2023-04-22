function validateHello(greetings) {
    let reg = /hello|ciao|salut|hallo|hola|ahoj|czesc/gi
    res = reg.test(greetings)
    return res;
}
console.log(validateHello('ciao'));