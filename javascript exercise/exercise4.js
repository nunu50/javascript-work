function findDate(){
    const date = new Date()
    const days = date.getDay();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
return `${days} / ${month} / ${year}`
}
console.log(findDate());