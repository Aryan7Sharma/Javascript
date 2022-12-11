"use strict";
// var keyword
var name = "aryan"
console.log(name)
// re-defining value to same variable
name = "sharma"
console.log(name)
// re-assign same variable name 
var name = "re-define same var again"
console.log(name)

// after define strict mode you can't define variable without keyword
// it cause an error because of strict mode
// name1 = "checkings";
// console.log(name1)

// let keyword
let  x = 100
console.log(x)
x = 200
console.log(x)
// cause an error because we can't define same variable name agaig by using let keyword
// let x = 100
console.log(x)

v = 10
console.log(v)
var v = 100

// we can't do same with let or const keyword
// l = 1
// console.log(z) // reference error
// let l = 10

// c = 0
// console.log(z) // reference error
const z = 1


// when we define variable by using const keyword 
// then we cann't re-assign any value to the same variable

const c = "constant"
console.log(c)
c = "C" // error -- Assignment to constant variable.
console.log(c)



