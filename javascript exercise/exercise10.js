const count = (str, char) => 
str.split('').filter(ch => ch === char).length;
const contain = (str,char) =>
count(str,char) >= 2 && count(str, char) <= 4;
console.log(count("oh", "o"))
console.log(count("ooooh","o"))
console.log(count("ooooooooh","o"))
console.log(contain("oh", "o"))
console.log(contain("ooooh","o"))
console.log(contain("ooooooooh","o"))