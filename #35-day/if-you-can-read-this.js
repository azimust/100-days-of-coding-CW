function to_nato(words) {
	// Go code
    let NATO_ALPHABET = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliett',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Sierra',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'X-ray',
        y: 'Yankee',
        z: 'Zulu',
    }
    let arrWords = words.toLowerCase().split('').filter(element => element != ' ');
    let arr = [];
    arrWords.map(e => {
        if(e in NATO_ALPHABET){
            arr.push(NATO_ALPHABET[e]);
        } else{
            arr.push(e)
        };
    });
    return arr.join(' ');
}
console.log(to_nato('go for it!?'));