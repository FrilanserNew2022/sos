
let animationLang = false;
document.querySelector('.header__lang-box').addEventListener('click', () => {
    if(!animationLang){
        document.querySelector('.header__lang-box').classList.toggle('open')
    }
    animationLang = true
    setTimeout(() => {
        animationLang = false
    }, 500)
});

let menuOpen = false;

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

let currentImg = 0;

function positionMainImg() {
    const collectionContainer = document.querySelectorAll('.img__big');
    collectionContainer.forEach((el, index) => {
        const position = (index - currentImg) * 100
        el.style.transform = `translate(${position}%, 0)`
    })
}

positionMainImg();

document.querySelector('.main__button-prev').addEventListener('click', () => {
    if (currentImg === 0) return;
    currentImg = currentImg - 1;
    positionMainImg();
})

document.querySelector('.main__button-next').addEventListener('click', () => {
    if (currentImg === 3) return;
    currentImg = currentImg + 1;
    positionMainImg();
})