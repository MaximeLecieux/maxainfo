const   navToggle = document.getElementById('nav-toggle')
        navClose = document.getElementById('nav-close')
        navMenu = document.getElementById('nav-menu')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.remove('-right-full')
        navMenu.classList.add('-right-0')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('-right-0')
        navMenu.classList.add('-right-full')
    })
}

