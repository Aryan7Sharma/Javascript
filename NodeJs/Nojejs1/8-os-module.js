const os = require("os")
//console.log(os)

// info about host
console.log(os.hostname())

//info about current user
console.log(os.userInfo())

// method return the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

// CurrentOS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS)