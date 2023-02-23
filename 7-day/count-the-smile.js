function countSmileys(arr) {
    return arr.filter((s) => s.match(/(:|;)(-|~)?(\)|D)/)).length
}
console.log(countSmileys([':)', ';(', ';}', ':-D']));