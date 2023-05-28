function _if(bool, func1, func2) {
    return bool ? func1() : func2()
}