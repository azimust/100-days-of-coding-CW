// function arrayDiff(a, b) {
//     let arr = []
//     a.map((el) => {
//         b.map((el2) => {
//             if(el !== el2){
//                 arr.push(el)
//             }
//         })
//     })
//     return arr;
// }

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item) )
}
console.log(arrayDiff([1, 2, 3], [1, 2]));