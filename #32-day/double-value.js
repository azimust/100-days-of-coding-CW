class Class {
    static count = 0;
    static getNumber() {
        if(this.count === 0){
            return this.count += 1;
        }
        return this.count *= 2;
    }
}