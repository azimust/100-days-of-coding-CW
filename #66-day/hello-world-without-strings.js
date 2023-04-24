const helloWorld = () => {
    // const H = String.fromCharCode(72);
    // const e = String.fromCharCode(101);
    // const l = String.fromCharCode(108);
    // const o = String.fromCharCode(111);
    // const W = String.fromCharCode(87);
    // const r = String.fromCharCode(114);
    // const d = String.fromCharCode(100);
    // const comma = String.fromCharCode(44);
    // const space = String.fromCharCode(32);
    // const excl = String.fromCharCode(33)

    // const hello = new String(H + e + l + l + o);
    // const world = new String(W + o + r + l + d);
    // const punctuation = new String(comma + space);

    // return hello.concat(punctuation, world, excl).toString();
    return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
};
console.log(helloWorld());