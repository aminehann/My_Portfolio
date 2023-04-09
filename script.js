// --------------------------Nav Menu----------------------------------
const exitBtn = document.querySelector(".fa-xmark")
const barMenu = document.querySelector(".fa-bars")

barMenu.addEventListener('click', function (){
    let mobileNavMenu = document.querySelector(".mobile_nav_menu")
    mobileNavMenu.classList.remove("hide")

    let navBar = document.querySelector(".nav-bar")
    navBar.classList.add("hide")

})

exitBtn.addEventListener('click', function (){
    let mobileNavMenu = document.querySelector(".mobile_nav_menu")
    mobileNavMenu.classList.add("hide")

    let navBar = document.querySelector(".nav-bar")
    navBar.classList.remove("hide")

})







