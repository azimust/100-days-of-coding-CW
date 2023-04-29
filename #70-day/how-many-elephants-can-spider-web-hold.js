function breakTheWeb(strength, width, level = 1000) {
    if(strength <= 0 || width <= 0) {
        return 0
    }
    if(strength < width * level) {
        return Math.floor(strength / level)
    }
    return width + breakTheWeb(strength - width * level, width - 1, level += 1000);
}
console.log(breakTheWeb(9200, 3));