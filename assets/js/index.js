import ru from '../locales/rus.js';
import en from '../locales/eng.js';
import de from '../locales/deu.js';
import fr from '../locales/fra.js';

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

// Узнаю текущий язык
let currentLanguage = navigator.language;

// Обновление контента по текущему языку
function upgrateContent (language = currentLanguage) {
    let translation;
    document.querySelectorAll('.lang__list-item').forEach(el => {
        el.style.display = 'block';
    })
    switch (language) {
        case 'ru-RU':

            translation = ru;
            currentLanguage = 'ru-RU'
            document.querySelector('.lang__list-item.rus').style.display = 'none'

            break;
        case 'en-EN':

            translation = en;
            currentLanguage = 'en-EN'
            document.querySelector('.lang__list-item.eng').style.display = 'none'

            break;

        case 'de-DE':

            translation = de;
            currentLanguage = 'de-DE'
            document.querySelector('.lang__list-item.deu').style.display = 'none'

            break;
        case 'fr-FR':

            translation = fr;
            currentLanguage = 'fr-FR'
            document.querySelector('.lang__list-item.fra').style.display = 'none'

            break;
        default:

            translation = en;
            currentLanguage = 'en-EN'
            document.querySelector('.lang__list-item.eng').style.display = 'none'

            break;
    }
    objectDeployment(translation);
}

upgrateContent()

function objectDeployment(object, positionInList = 0) {

    if (typeof object !== 'object') return console.error('this not object');

    for (let key in object) {
        let elem = object[key];

        if (Array.isArray(elem)) {
            arrayDeployment(elem, key)
        }

        if (typeof elem === 'object' && !Array.isArray(elem) && elem !== null) {
            objectDeployment(elem)
        }

        if(typeof elem === 'string'){
            upgrateElement( document.querySelectorAll(`${key}`)[positionInList], elem)
        }
    }
    return undefined;
}

function arrayDeployment(array, className) {
    if(!Array.isArray(array) || typeof className !== 'string') return console.error('arrayDeployment, имя класса или массив был передан неверно.')

    // Иттерируюсь по массиву и обновляем контент поэтапно (если элементов с одним классом  несколько)
    for (let i = 0; i < array.length; i++) {
        const element = (document.querySelectorAll(`${className}`))[i]
        const elemContent = array[i];

        if(typeof elemContent === 'object') {
            objectDeployment(elemContent, i);
        }
        if (typeof elemContent === 'string'){
            upgrateElement(element, elemContent)
        }
    }
}

function upgrateElement (elem, elemContent) {
    elem.textContent = elemContent;
}

let animationLang = false;

document.querySelector('.header__lang-box').addEventListener('click', () => {
    if(!animationLang) {
        const langBox = document.querySelector('.header__lang-box')
        if(langBox.classList.contains('open')) {
            langBox.classList.remove('open')
            langBox.display = 'none'
            document.querySelectorAll('.lang__list-item').forEach((el) => {
                el.removeEventListener('click', listenerForLanguageChange)
            })
        } else {
            langBox.classList.add('open')
            langBox.display = 'block'
            document.querySelectorAll('.lang__list-item').forEach((el) => {
                el.addEventListener('click', listenerForLanguageChange)
            })
        }        
    }
    animationLang = true
    setTimeout(() => {
        animationLang = false
    }, 500)
});

function listenerForLanguageChange (event) {  
    console.log(event.target)
    const elemId = event.target.id
    
    if(typeof elemId !== 'string') {
        return console.error('id is not define')
    }
    upgrateContent(elemId)
}