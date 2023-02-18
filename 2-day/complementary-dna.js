function DNAStrand(dna){
    let dnaKey = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G'
    };
    return dna.replace(/./g, e => dnaKey[e]);
}
console.log(DNAStrand('AAA'));