let nameCardContainer = document.querySelector('.name-card-container');
let meContainer = document.querySelector('.me-container');
let abilitiesContainer = document.querySelector('.abilities-container');

let abilitiesItemArray = document.querySelectorAll('.abilities-item');

nameCardContainer.style.height = window.innerHeight;
meContainer.style.height = window.innerHeight;

console.log(abilitiesContainer.getBoundingClientRect().height);
if(abilitiesContainer.getBoundingClientRect().height < window.innerHeight){
    abilitiesContainer.style.height = window.innerHeight;
}

window.addEventListener('scroll', function(){
    for(let i = 0; i < abilitiesItemArray.length; i++){
        checkAbilitiesItemIsVisible(abilitiesItemArray[i]);
    }
});

function checkAbilitiesItemIsVisible(abilitiesItem){
    console.log('if ' + window.scrollY  + ' > ' + ( window.scrollY  - window.innerHeight/1.5 + abilitiesItem.getBoundingClientRect().y + abilitiesItem.getBoundingClientRect().height));

    if(window.scrollY >= window.scrollY - window.innerHeight/1.5 + abilitiesItem.getBoundingClientRect().y + abilitiesItem.getBoundingClientRect().height){
        abilitiesItem.classList.remove('abilities-item-invisible');
    }
}

