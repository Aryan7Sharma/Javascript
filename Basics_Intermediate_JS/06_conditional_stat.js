// if, else, elseif


let x = 18
let y = 12
let z = 42

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

console.log(geneure(x))
console.log(geneure(y))
console.log(geneure(z))
console.log(geneure(88)) 
console.log(geneure("str"))