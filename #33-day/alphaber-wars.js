function alphabetWar(fight) {
    let dictL = {w: 4, p: 3, b: 2, s: 1};
    let dictR = {m: 4, q: 3, d: 2, z: 1};

    let arr = fight.split('');

    let left = arr.filter(v => v.match(/[wpbs]/g)).map(v => dictL[v]).reduce((a, b) => a + b, 0);
    let right = arr.filter(v => v.match(/[mqdz]/g)).map(v => dictR[v]).reduce((a, b) => a + b, 0);
    return left > right ? "Left side wins!" : right > left ? 'Right side wins!' : "Let's fight again!";
}
console.log(alphabetWar('bsqz'));