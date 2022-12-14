console.log(document)
console.log(document.head)
console.log(document.body)


//The "Cannot read property 'querySelector' of null" error occurs for 2 reasons:
//Calling the querySelector() method on a null value (DOM element that doesn't exist).
//Inserting the JS script tag above the HTML where the DOM elements are declared.


// queryselector
let heading = document.querySelector("h1");
console.log(heading,heading.innerText)
heading.innerText = "D.O.M"
console.log(heading,heading.innerText) 



// queryselector with class
let para = document.querySelector("p.demo")
console.log(para.innerText)



// querySelectorAll
let allHead = document.querySelectorAll("h1");
console.log(allHead)
for(i=0; i<allHead.length; i++){
    console.log(allHead[i].innerText)
}



// by Id
console.log(document.querySelectorAll("#main_h2"))
console.log(document.getElementById("main_h2"))


// we can also use queryselector on child node but not a getelementById.

// Event-listeners.

/*const increment = document.querySelector('button.increment')
const decrement = document.querySelector('button.decrement')
let counter = 0
function incrementCounter(){
    const conterEl = document.getElementById('counter')
    counter++
    conterEl.innerText = counter
}
function decrementCounter(){
    const conterEl = document.getElementById('counter')
    counter--
    conterEl.innerText = counter
}
increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)*/



// Creating Element by js
/*const increment = document.querySelector('button.increment')
const decrement = document.querySelector('button.decrement')
const conterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')
let counter = 0

function incrementCounter(){
    counter++
    conterEl.innerText = counter

    // create an element
    const li = document.createElement('li')
    const b = document.createElement('b')

    const textNode1 = document.createTextNode(counter)
    b.appendChild(textNode1)

    const textNode2 = document.createTextNode("Number ")

    // appending
    li.appendChild(textNode2)
    li.appendChild(b)

    ulElement.appendChild(li)
}
function decrementCounter(){
    if (counter>0){
        counter--
        const ul = ulElement.getAttributeNames('li')
        
        console.log(ul)
        
    }
    conterEl.innerText = counter
}
increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)
*/


/*
const increment = document.querySelector('button.increment')
const decrement = document.querySelector('button.decrement')
const conterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')
let counter = 0

function incrementCounter(){
    counter++
    conterEl.innerText = counter

    // create an element
    const li = document.createElement('li')
    li.setAttribute('data-counter', counter)
    li.innerHTML = counter + '<b>:counter</b>'
    console.log(li)
    // appending
    ulElement.appendChild(li)
}
function decrementCounter(){
    if (counter>0){
        const li = ulElement.querySelector('[data-counter="'+counter+'"]');
        const number = parseInt(li.getAttribute('data-counter'), 10);
        console.log(number)
        li.remove()
        counter--  
    }
    conterEl.innerText = counter
}
increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)
*/



// css class manuplation
const increment = document.querySelector('button.increment')
const decrement = document.querySelector('button.decrement')
const conterEl = document.getElementById('counter')
const ulElement = document.getElementById('list-items')
let counter = 0

function incrementCounter(){
    counter++
    conterEl.innerText = counter

    // create an element
    const li = document.createElement('li')
    li.setAttribute('data-counter', counter)

    if (counter%2 === 0){
        li.style.background = 'red'
        li.style.padding = '20px'
    } else{
        li.setAttribute('class', 'green')
        li.style.padding = '20px'
    }
    li.innerHTML = counter + '<b>:counter</b>'

    // appending
    ulElement.appendChild(li)
}
function decrementCounter(){
    if (counter>0){
        const li = ulElement.querySelector('[data-counter="'+counter+'"]');
        const number = parseInt(li.getAttribute('data-counter'), 10);
        console.log(number)
        li.remove()
        counter--  
    }
    conterEl.innerText = counter
}
increment.addEventListener('click', incrementCounter)
decrement.addEventListener('click', decrementCounter)