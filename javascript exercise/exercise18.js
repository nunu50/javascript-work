const  separate = (str) => str.split('\n').map(row=>row.split(','));
const str = `abc,def,ghi,jkl,mno,pqr,stu`;
console.log(separate(str))