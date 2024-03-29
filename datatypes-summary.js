// Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34567187629897127981n


// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["superman","batman","spiderman"];

let myObj ={
    name: "pavitra",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);

//***************Memory**********************//

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubename = "thePavitra"
let anothername = myYoutubename
anothername = "allTimeAwesome"

console.log(myYoutubename);
console.log(anothername);
