// adding active class via toogle
const navLeftUl = document.getElementById('nav-left-ul')
const toogleBotton = document.getElementById('header-toogle-btn')

console.log(navLeftUl)

function toogleCta(){
    navLeftUl.classList.toggle('active')
}
toogleBotton.addEventListener('click', toogleCta)
