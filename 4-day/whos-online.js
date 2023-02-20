const whosOnline = (friends) => {
    // Your code here...
    friends = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
      }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
      }]

      let online = [];
      let offline = [];
      let away = [];

    friends.map(el => {
        el.status === 'online' && el.lastActivity < 11 ? online.push(el.username):
        el.status === 'offline'? offline.push(el.username):
        away.push(el.username);
    });

    if(online.length > 0 && offline.length >  0 && away.length > 0){
        return {online, offline, away}
    };
    if(online.length > 0 && away.length > 0){
        return {online, away}
    };
    if(online.length > 0 && offline.length > 0){
        return {online, offline}
    };
    if(offline.length > 0 && away.length > 0){
        return {offline, away}
    };
    return {};
}