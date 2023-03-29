function initials(n) {
    let arr = [];
    let arr2 = [];
    n.split(' ').map(v => {
        let first = v.slice(0, 1).toUpperCase();
        arr2.push(first);
    });
    arr.push(n.split(' ').at(-1).slice(0, 1).toUpperCase() + n.split(' ').at(-1).slice(1));
    return arr2.slice(0, -1).concat(arr).join('.');
}
console.log(initials('code bobbfd dsf wars'));