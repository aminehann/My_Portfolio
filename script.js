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

// --------------------------Carousel----------------------------------
// const nextBtn = document.querySelector(".ri-arrow-right-s-line")
// const prevBtn = document.querySelector(".ri-arrow-left-s-line")
// const slide1 = document.querySelector(".slide1")
// const slide2 = document.querySelector(".slide2")
// const slide3 = document.querySelector(".slide3")
// const slide4 = document.querySelector(".slide4")
// let Slide1 = slide1.innerHTML
// let Slide2 = slide2.innerHTML

// nextBtn.addEventListener('click', function (){
//     slide1.innerHTML =  slide3.innerHTML
//     slide2.innerHTML =  slide4.innerHTML
//     slide1.classList.add('rotate')
//     slide2.classList.add('rotate')
    
// })

// prevBtn.addEventListener('click', function (){

//     slide1.innerHTML =  Slide1
//     slide2.innerHTML =  Slide2
//     slide1.classList.add('rotate')
//     slide2.classList.add('rotate')
//     slide1.classList.remove('rotate')
//     slide2.classList.remove('rotate')
    
//})





