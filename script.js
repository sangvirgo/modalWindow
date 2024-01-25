'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);



const openModal= ()=> {
    modal.classList.remove('hidden');
    // overlay dislay to sreeen 
    overlay.classList.remove('hidden')
}

const closeModal= () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

document.addEventListener('keydown', (a)=>{
    console.log(a.key);

    if(a.key==="Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    } 
})

btnOpenModal.forEach((i)=> i.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
