function quadrant(x, y) {
    // Poveli!
    if(x < 0 && y < 0) {
        return 3;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x > 0 && y > 0) {
        return 1;
    } else if (x > 0 && y < 0) {
        return 4;
    };
}
console.log(quadrant(-10, 100));