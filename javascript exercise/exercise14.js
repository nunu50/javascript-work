const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([1,2,3,4,5,6,7,8,9,0]))
console.log(largestEven([1,2,3,44,5,6,7,8,9,0]))
console.log(largestEven([1,2,3,4,55,66,7,8,9,0]))