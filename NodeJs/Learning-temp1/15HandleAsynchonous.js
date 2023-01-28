let a = 10
let b = 0

const waitingdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(40)
    },3000)
})

waitingdata.then((data)=>{
    b=data
    console.log(`After Waiting 3 Second \n${a+b}`)
})
console.log(`Without waiting for Waiting function or Promice \n${a+b}`)