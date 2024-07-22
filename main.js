/*=============== SHOW MENU ===============*/

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

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    console.log(contactForm)

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_gbntvkl', 'template_ifie9g9', '#contact-form', 'jM5rmCxLkgb1d12Fl')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message reçu 👍 Je vous répond dès que possible !'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''

        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        //show error message
        contactMessage.textContent = 'Message non envoyé (service error) 👎'
    })
}

contactForm.addEventListener('submit', sendEmail)