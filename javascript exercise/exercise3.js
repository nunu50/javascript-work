// what is '.slice()'
/* let myString = "Hello, world!";
let slicedString = myString.slice(7, 12);

console.log(slicedString); // Prints "world" */

/*let myString = "Hello, world!";
let slicedString = myString.slice(-6);

console.log(slicedString); // Prints "world!" */
//what is string.fromCharCode ??


/*let charCode1 = 72;
let charCode2 = 101;
let charCode3 = 108;
let charCode4 = 108;
let charCode5 = 111;

let myString = String.fromCharCode(charCode1, charCode2, charCode3, charCode4, charCode5);

console.log(myString); // Prints "Hello" 
In this example, we have five variables that store the character codes for
 the letters of the word "Hello". By calling String.fromCharCode() with these character codes as argu
 ments, we create a string that spells "Hello".

*/
// string.fromCharCode
//charCodeAt
const moveLetter = (string) => 
string
.split('')
.map(char => String.fromCharCode(char.charCodeAt
    (0) + 1)).join('');
   
 console.log(moveLetter('abcd'));