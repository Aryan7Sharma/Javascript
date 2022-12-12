// and == &&, or == ||, not !, equal to ==/===

// array

const stuAge = [17,12,28,22,21,19,17,14,32]
function genre(age){
    if (age<=14){
        return "Child"
    }
    else if (age>14 && age<=21){
        return "Teen"
    }
    else if (age>21 && age<=100){
        return "Adult"
    }
    else{
        return "Invalid Input try again"
    }
}
for(let i=0; i<stuAge.length; i++){
    console.log(genre(stuAge[i]))
}

// push and pop operation in array

stuAge.push(10)
console.log(stuAge)
stuAge.pop()
console.log(stuAge)
