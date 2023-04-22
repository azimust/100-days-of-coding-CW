function stepThroughWith(s) {
    //You can't bring your code, but you can bring this comment
    return (/(.)\1/).test(s);
}
console.log(stepThroughWith('fiirie'));