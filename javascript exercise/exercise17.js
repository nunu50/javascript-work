const object1 = {
    a:1, b:2, c:1
};
const object2 = {
    a:1, b:1, c:1
};
 const object3 = {
    a:1, b:1, d:1
};
const objectsEqual = (a,b) => 
Object.keys(a).every(key => b[key]);
console.log(objectsEqual(object1,object2));
console.log(objectsEqual(object2,object3));
console.log(objectsEqual(object3,object1));
