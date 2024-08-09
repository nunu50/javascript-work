function nearest(a, b){
  return (100 - a)<(100 - b) ? a : b
}
console.log(nearest(90,50))
console.log(nearest(0,50))
console.log(nearest(-20,50));
