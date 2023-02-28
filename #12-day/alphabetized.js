// function alphabetized(s) {
//     return s.split('').sort().join('')
// }

function alphabetized(s) {
    let a = '';
    for(let i = 97; i < 123; i++){
        for(let j = 0; j < s.length; j++){
            if(s[j].toLowerCase().charCodeAt() == i){
                a += s[j]
            }
        }
    }
    return a
}

console.log(alphabetized('The Holy Bible'));