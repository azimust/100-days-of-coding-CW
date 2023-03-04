function bandNameGenerator(str) {
    // Happy coding
    return str.slice(0, 1) === str.slice(-1) ? str.slice(0, 1).toUpperCase() + str.slice(1, -1) + str : 'The' + ' ' + str.slice(0, 1).toUpperCase(0) + str.slice(1)
}
console.log(bandNameGenerator('sandles'));