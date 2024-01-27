// console.log("2" > 1);
// console.log("02"> 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//the reason is that an equality check == and comparisons < > >= <= works differently
//comparisons convert null to a number , treating it as a 0.
//thats why null>= 0 is true , null > 0 is false. 
console.log(undefined == 0); //false
console.log(undefined < 0);  //false

console.log("2" === 2); //false  //triple equal hai to value k sath sath data type bhi check hota h agar dono same h to hi true output aayega
