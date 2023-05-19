function mostLikely(prob1,prob2){
    // your code;
    let p1 = prob1.split(':');
    let p2 = prob2.split(':');
    
    p1 = p1[0] / p1[1];
    p2 = p2[0] / p2[1];
    
    return p1 > p2;
}

console.log(mostLikely('1:3','1:2'));