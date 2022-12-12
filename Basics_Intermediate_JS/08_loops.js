// for loop , while loop

// calcilate square root of even values from 0 to 10
for(let i=2; i<=10; i=i+2){
    console.log(i**2)
}

// store in array
const oddArray = []
for(let i=1; i<=10; i=i+2){
    oddArray.push(i**2)
}
console.log(oddArray)

// while
let i = 0
while (i<10){
    console.log("the number is " + i)
    i++ // if you don't increment value of i then it end up in infinite loop
}

// do while
let j = 0

// it will check condition after iterating atleast one time.
do{
    console.log("the number is " + j)
    j++
}while(j<0)