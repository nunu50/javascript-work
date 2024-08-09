const isEveryElem = (arr, fn) => {
    for (let i=0; i<arr.length; i+=1){
        if(!fn(arr[i])){
            return false
        }
    }
    return true
}
console.log([1,2,3,4,5], (x) => x > 0);
console.log([1,2,3,4,5], (x) => x > 3);
console.log([1,2,3,4,5].every(x => x > 0))
console.log([1,2,3,4,5].every(x => x > 3))