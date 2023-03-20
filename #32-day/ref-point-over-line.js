function reflect(point, line) {
    // point: [x, y] -> coordinates of the point
    // line:  [m, b] -> slope-intercept of equation 'y = m * x + b'
    let arr = [];
    let a = 2 * (point[1] - line[1] - point[0] * line[0]) / (line[0] * line[0] + 1);
    arr.push(point[0] + line[0] * a, point[1] - a)
    return arr;
}
console.log(reflect([1, 2], [3, 4]));