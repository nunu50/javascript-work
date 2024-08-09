const ascending = (arr) => {
    for(let i=0; i < arr.length; i+=1){
        if (arr[i+1] < arr[i])
        return false;
    }
    return true;
}
console.log(ascending([1,2,4]));
console.log(ascending([1,3,2]));