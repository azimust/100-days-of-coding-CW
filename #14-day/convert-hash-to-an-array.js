function convertHashToArray(hash){
    //your code here - sort the keys!
    // let key = Object.keys(hash);
    // let value = Object.values(hash);
    // let arr = [];

    // for(let i = 0; i < key.length; i++){
    //     arr.push([key[i], value[i]])
    // };

    return Object.entries(hash).sort()
}
console.log(convertHashToArray({name: "Jeremy", age: 24}));