function scrollingText(text){
    text = text.toUpperCase();
    return [...text].map((_, i) => text.slice(i) + text.slice(0, i))
}
console.log(scrollingText('codewars'));