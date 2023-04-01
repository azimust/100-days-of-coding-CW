function solution(words, current = '') {
    if(words.length === 0) {
        return true;
    }
    for(let i = 0; i < words.length; i++) {
        if(current.length === 0 || current.at(-1) === words[i][0]) {
            if(solution(words.slice(0, i).concat(words.slice(i + 1)), current + words[i])) {
                return true;
            }
        }
    }
    return false;
}
console.log(solution(["no", "dog", "on", "good"]));