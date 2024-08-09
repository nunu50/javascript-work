function newString(str){
    if(str.length < 3){
        return str
    }
    else{
        return str.slice(0,3)+str.slice(-3)
    } 
} 
console.log(newString("abcd"));
console.log(newString("abcdef"));
console.log(newString("nuhasamson"));
console.log(newString("12"));