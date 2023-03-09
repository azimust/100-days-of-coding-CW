function heron(a, b, c) {
  let s = (a + b + c) / 2;
  let res = s * (s - a) * (s - b) * (s - c);
  return Math.sqrt(res);
}
console.log(heron(3, 4, 5));