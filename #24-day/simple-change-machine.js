function changeMe(moneyIn){
  // Write your function here
  switch(moneyIn){
    case '20p':
        return '10p '.repeat(2).trim()
    case '50p':
        return '20p '.repeat(2).trim() + ' 10p'
    case '£1':
        return '20p '.repeat(5).trim()
    case '£2':
        return '20p '.repeat(10).trim()
    case '£5':
        return '20p '.repeat(25).trim()
    default:
        return moneyIn;
  }
}
console.log(changeMe('£1'));