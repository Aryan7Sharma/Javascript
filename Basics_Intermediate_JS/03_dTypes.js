// number
// string
// boolean
// array
// object
// bigInt
// undefined, null

// number
let x = 100
console.log(x, typeof(x)) //typeof is a built-in function.
x = 0.1
console.log(x, typeof(x))
x = 0.1 + 10
console.log(x, typeof(x))

// string
x = "aryan"
console.log(x, typeof(x))
x = 'ary"an"'
console.log(x, typeof(x))
x = "aryan" + 10
console.log(x, typeof(x))
x = 10 + "aryan"
console.log(x, typeof(x))

//BigInt
x = 1000000000000000000000 // convert it into expo
console.log(x, typeof(x))
x = 1000000000n
console.log(x, typeof(x))
x = 10000000000000000000000n
console.log(x, typeof(x))

// boolean
x = true
console.log(x, typeof(x))
x = false
console.log(x, typeof(x))


// unfefined,null
x = undefined
console.log(x, typeof(x))
x = null
console.log(x, typeof(x))


// array/object
var b = null
var c = undefined
x = [1,"hello",0.1,b,c,true]
console.log(x, typeof(x))
