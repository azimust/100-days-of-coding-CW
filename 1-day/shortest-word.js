function findShort(s){
    return Math.min.apply(this, s.split(' ').map((el) => el.length))
}