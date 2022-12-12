// all scopes are a children of global scope
// we can't access var and value of the variable from outside of it scope.

function fun(){ 
    let i = 10
    console.log(i)
}
fun()
// get's an error because we try to access a i from outside of its scope.
// console.log(i) 



// variable showding

const myAge = 19

function printMyAge(){
    const myAge = 18
    console.log(myAge)
}
console.log(myAge)
printMyAge( )