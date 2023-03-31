function contamination(text, char) {
    // Code here ;)
    let str = '';
    for(let i = 0; i < text.length; i++){
        str += char;
    }
    return str;
}
console.log(contamination('//case', ' '));