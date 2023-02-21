function abbrevName(name){
    return String(name).toUpperCase().split(' ').map((el) => {
        return el.charAt(0)
    }).join('.')
}
console.log(abbrevName('azim Toktos'));