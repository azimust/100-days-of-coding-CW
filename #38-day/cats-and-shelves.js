function solution(start, finish)
{
    let steps = finish - start;
    let bigJump = Math.floor(steps / 3);
    let smallJump = steps % 3;

    return bigJump + smallJump;
}
console.log(solution(1, 5));