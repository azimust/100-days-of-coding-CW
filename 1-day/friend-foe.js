function friend(friends){
    //your code here
      let arr =[];
      friends.map((el) => {
          if(el.length === 4){
              arr.push(el)
          }
      })
      return arr
}