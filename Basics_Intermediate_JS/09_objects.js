// equality
console.log(1 === '1')
console.log(1 == 1) //it will not type cast

// objects or dictionary or hashmap

let hashmap = {
    keyname1:"aryan",
    age:"19",
    hashmap2: {
        subject:["C++","Python","Javascript"]
    }
}
console.log(hashmap['keyname1'])
console.log(hashmap.keyname1)
console.log(hashmap['hashmap2'])
console.log(hashmap.hashmap2['subject'])
console.log(hashmap.hashmap2['subject'][2])


// call by reference
//whenever you pass object to a function that means you just pass a address of that object
// if you pass primitive then it wiil take it as temp copy of original obj.

let num = 2
function square(nonpremetive){
    num = num**2
    console.log(num)
}
console.log(num)
square(num)
console.log(num)


//
let num2 = 2
function square2(premetive){
    premetive = premetive**2
    console.log(premetive)
}
console.log(num2)
square2(num2)
console.log(num2)