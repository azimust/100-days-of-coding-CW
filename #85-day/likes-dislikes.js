function likeOrDislike(buttons) {
    let state = 'Nothing';
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i] === state) {
            state = 'Nothing'
        } else {
            state = buttons[i]
        }
    }
    return state
  }
  console.log(likeOrDislike([Like, Dislike]));