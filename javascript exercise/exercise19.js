const getRandomNumber = () => Math.floor(Math.random()*16).toString(16);

const getRandomColor = () => '#' + Array.from({length:6}).map(getRandomNumber).join('');

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());