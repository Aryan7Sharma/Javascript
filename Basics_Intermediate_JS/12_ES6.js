const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]
console.log(arr3)


const arrObj1 = {
    name:'Aryan',
    age:19
    
}
const arrObj2 = {
    name:'Tushar'
}
const arrObj3 = {
    ...arrObj1,
    ...arrObj2
}

console.log(arrObj3)



//es6 - arrow function
//hoist the function by default on top
// but not arrow-function

// so you can't called arrow above it's declaration

//console.log(aFunctionName(10,3)) // Uncaught ReferenceError: Cannot access 'aFunctionName' before initialization
const aFunctionName = (arg1,arg2) => arg1**2+arg2

console.log(aFunctionName(10,3))




// array function in es6.
 

