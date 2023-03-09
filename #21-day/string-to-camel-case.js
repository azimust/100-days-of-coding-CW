function toCamelCase(str){
    // return str.split(/[-_ ]/).map((e) => {
    //     return e[0].toUpperCase() + e.slice(1);
    // }).join('');


    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
console.log(toCamelCase('the_stealth_Warrior'));