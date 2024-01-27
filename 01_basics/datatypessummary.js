// primitive data type:-

// these are call by value hote h  ,
// inka data ka refrence kbhi nhi diya JATA  vo hume copy hoke milta h and usme jo bhi changes krte h vo copy m changes hote h orignal m nhi hote

// 7 types :- String , Number , Boolean , null(its means empty not zero) , undefined,Symbol
// , Bigint

 const score = 100
 const scorevalue = 10.4

 const isloggedin = false 
 const outsidetemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherid = Symbol('123')

//  console.log(id === anotherid);

//refrence (non primitive) data type :-

// array, objects,functions     //these have data type known as object/function shows in output when we check 

//array
const heros = ["shaktiman" , "naagraj " , "doga"];

//object
let myObj = {
    name: "aalok",
    age: 22,
}

const myFunction = function(){
    console.log("helloo world");

}

console.log();

console.log(typeof heros);
//======================================================//

// stack(primitive) = call by copy(value) , heap (non- primitive) = call by refrence, changes we make will show in orignal too

let myyoutubename = "aalokslimshadydotcom"

let anothername = myyoutubename
anothername ="aalokydv"

console.log(myyoutubename);
console.log(anothername);

let userone = {
    email : "aalok1010",
    upi : "aalok@upi"

}

let usertwo = userone


usertwo.email= "aalok74047"


console.log(userone.email);
console.log(usertwo.email);
