
let animationLang = false;
let menuOpen = false;
document.querySelector('.header__lang-box').addEventListener('click', () => {
    if(!animationLang){
        document.querySelector('.header__lang-box').classList.toggle('open')
    }
    animationLang = true
    setTimeout(() => {
        animationLang = false
    }, 500)
});

document.querySelector('.menu__burger').addEventListener('click', () => {
    if(!menuOpen){
        document.body.classList.toggle('open')
        document.querySelector('.header__lang-box').classList.remove('open')
        document.querySelector('.header__menu').classList.toggle('open')
        document.querySelector('.central__line').classList.toggle('open')
    }
    menuOpen = true
    setTimeout(() => {
        menuOpen = false
    }, 1000)
})