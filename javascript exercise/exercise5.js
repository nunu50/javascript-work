function addNew(string){
    return string.indexOf('New!') === 0 ? string: `New! ${string}`;
}
console.log(addNew('New! order'))
