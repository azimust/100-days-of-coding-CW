function scoreboard(string) {
  // code here!
  let arr = [];
  let score =
    {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };
  string.split(' ').map(el => arr.push(score[el]));
  return arr.filter(el => el !== undefined)
}
console.log(scoreboard('Arsenal just conceded another goal, two nil'));