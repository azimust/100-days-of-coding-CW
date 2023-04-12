function feast(beast, dish) {
    //your function here
    return true ? beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1) : false
}
console.log(feast('bear', 'beat'));