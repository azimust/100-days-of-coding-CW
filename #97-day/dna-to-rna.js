function DNAtoRNA(dna) {
    return dna.replace(/T/gi, 'U')
}

console.log(DNAtoRNA('TTT'));