function getExtention(string){
    return string.slice(string.lastIndexOf('.'))
} 
console.log(getExtention('nuha.html'));
console.log(getExtention('nuha.css'));
console.log(getExtention('nuha.js'));
console.log(getExtention('nuha.html.css'));
