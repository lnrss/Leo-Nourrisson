

/*===== GIF LOADER =====*/
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});


/*===== SHOW MENU =====*/
const showMenu = (toggleId,
    navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click',
            () => {
                nav.classList.toggle('show-menu')
            }
        )
    }
}

showMenu('nav-toggle',
    'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 540) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== GSAP ANIMATION =====*/
gsap.from('.home__img', { opacity: 0, duration: 2, delay: .5, x: 60 })
gsap.from('.home__data', { opacity: 0, duration: 2, delay: .8, x: 25 })
gsap.from('.home__greeting, home__name, .home__profession, .home__button', { opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2 })

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav__item', { opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2 })
gsap.from('.text__cv, .home__social-icon', { opacity: 0, duration: 2, delay: 2.3, y: 25, ease: 'expo.out', stagger: .2 })

/*===== NAME ANIMATION =====*/

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {

        const current = this.wordIndex % this.words.length;

        const fullTxt = this.words[current];

        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {

            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 120;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {

            typeSpeed = this.wait;

            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            this.wordIndex++;

            typeSpeed = 800;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}