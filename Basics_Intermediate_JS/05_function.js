// function in JS

function print(parameter){
    console.log(parameter)
}

print("hello world")
print(1+1)
print(1,2) // only take first argument



let x =  10
console.log(x)
function square(){
    x = x**2
    console.log(x)
}
console.log(square)
console.log(square()) // return undefined because return is not given to this function
square()
console.log(x)


function pi(){
    let pi = 3.14
    return pi
}
console.log(pi())
let p = pi()
console.log(p)
