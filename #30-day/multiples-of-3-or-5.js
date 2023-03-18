function solution(number){
    // let arr = [];
    let sum = 0;
    for (let i = 1; i < number; i++) {
        // if(i % 3 === 0 || i % 5 === 0) arr.push(i);
        if (i % 3 === 0 || i % 5 === 0) sum += i;;
    };
    //   return [...new Set(arr)].reduce((a, b) => a + b, 0);
    return sum
}
console.log(solution(20));