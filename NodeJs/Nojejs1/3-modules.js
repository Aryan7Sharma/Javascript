// Modules
const names = require('./4-name') // import names
console.log(names)
const sayHi = require('./5-utils') // import function sayHi
console.log(sayHi)
const alternate = require('./6-alternative-flavour')
console.log(alternate, "alter")
sayHi('aryan')
sayHi(names.aryan)
sayHi(names.code)

require('./7-mind-granades')

