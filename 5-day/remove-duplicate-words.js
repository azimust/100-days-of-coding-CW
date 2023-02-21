function removeDuplicateWords (s) {
    // your perfect code...
    return [...new Set(s.split(' '))].join(' ');
}
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));