let nameCardContainer = document.querySelector('.name-card-container');
let meContainer = document.querySelector('.me-container');
let abilitiesContainer = document.querySelector('.abilities-container');

let abilitiesItemArray = document.querySelectorAll('.abilities-item');

let headerButtons = document.querySelectorAll('.spot');

nameCardContainer.style.height = window.innerHeight;
meContainer.style.height = window.innerHeight;

if(abilitiesContainer.getBoundingClientRect().height < window.innerHeight){
    abilitiesContainer.style.height = window.innerHeight;
}

window.addEventListener('scroll', function(){
    for(let i = 0; i < abilitiesItemArray.length; i++){
        checkAbilitiesItemIsVisible(abilitiesItemArray[i]);
    }
});

function checkAbilitiesItemIsVisible(abilitiesItem){
    if(window.scrollY >= window.scrollY - window.innerHeight/1.5 + abilitiesItem.getBoundingClientRect().y + abilitiesItem.getBoundingClientRect().height){
        abilitiesItem.classList.remove('abilities-item-invisible');
    }
}

headerButtons[1].addEventListener('click', function(){
    window.scroll({ top: document.getElementById('me-container-start').getBoundingClientRect().y, left: 0, behavior: 'smooth' });
});

headerButtons[2].addEventListener('click', function(){
    window.scroll({ top: document.getElementById('abilities-container-start').getBoundingClientRect().y, left: 0, behavior: 'smooth' });
});

headerButtons[3].addEventListener('click', function(){
    window.scroll({ top: document.getElementById('proyects-container-start').getBoundingClientRect().y, left: 0, behavior: 'smooth' });
});