var mispelled = function(word1, word2)
{
    let count = 0;
    for(let i = 0, j = 0; i < word1.length; i++, j++){
        if (word1[i] !== word2[j]) {
            count++;
        }
        if (word1.length > word2.length) {
            i++
        }
    }
    return count < 2
}
console.log(mispelled('versed', 'versed'));