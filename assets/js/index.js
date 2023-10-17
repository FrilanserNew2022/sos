
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
    document.querySelector('.circles__full').style.transform = `translate(${currentImg * 22}px, 0)`
    const collectionContainer = document.querySelectorAll('.img__big');
    collectionContainer.forEach((el, index) => {
        const position = (index - currentImg) * 100
        el.style.transform = `translate(${position}%, 0)`
    })
}

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

document.querySelector('.current').addEventListener('', () => {
    console.log(1)
})

setTimeout(() => {
    document.querySelector('.rectangle__circle-second').style.background = '#FFFFFF';
    document.querySelector('.content__text-second').classList.remove('close')
}, 4800)

setTimeout(() => {
    document.querySelector('.rectangle__circle-third').style.background = '#FFFFFF'
    document.querySelector('.content__text-third').classList.remove('close')
}, 8800)