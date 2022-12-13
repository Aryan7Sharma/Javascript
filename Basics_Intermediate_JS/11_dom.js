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



// listeners
