function solution(frank, sam, tom) {
    // let frankSum = frank.reduce((a, b) => a + b);
    // let samSum = sam.reduce((a, b) => a + b);
    // let tomSum = tom.reduce((a, b) => a + b);

    // if(frankSum >= samSum || frankSum >= tomSum){
    //     return true;
    // }else{
    //     return false;
    // };
    return frank[2] > sam[0] && frank[2] > tom[0] && frank[3] > sam[1] && frank[3] > tom[1];
}
console.log(solution([3 ,6, 7, 9], [1, 6, 7, 8], [2, 9, 10, 11]));