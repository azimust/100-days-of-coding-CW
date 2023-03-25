function sortEmotions(arr, order){
    let emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 };
    arr = arr.sort((a, b) => emotions[a] - emotions[b]);
    return order === true ? arr : arr.reverse();
}
console.log(sortEmotions([ ':D', 'T_T', ':D', ':(' ], false));