const evenNumber =  (arr) => arr.filter(num => num%2 == 0).length;
const findEven = (num) =>  {
    const returnArray = [];
    for (let i=1; i<= num; i+=1){
        returnArray.push(i)
    }
    return returnArray;
};
  console.log(evenNumber(findEven(10)))
  console.log(evenNumber(findEven(7)))