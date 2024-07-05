const modalMenuTrigger = document.querySelectorAll('.burger__menu');
const modalTrigger = document.querySelectorAll('.discuss-project');
const modalMenu = document.querySelector('#modalMenu');
const modal = document.querySelector('#modal');
const modalMenuClose = document.querySelector('.modalMenu-close');
const modalClose = document.querySelector('.modal-close');
const container = document.querySelector('.modal-wrapper');

modalMenuTrigger.forEach(btn=>{
    btn.addEventListener('click',() =>{
        modalMenu.classList.add('show');
        modalMenu.classList.remove('hide');
        container.classList.add('show');
        container.classList.remove('hide');
        document.body.style.overflow='hidden';
       
    })
})

modalMenuClose.addEventListener('click', ()=>{
    modalMenu.classList.add('hide');
    modalMenu.classList.remove('show');
    container.classList.add('hide');
    container.classList.remove('show');
    document.body.style.overflow='';

})

modalTrigger.forEach(btn=>{
    btn.addEventListener('click',() =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        container.classList.add('show');
        container.classList.remove('hide');
        document.body.style.overflow='hidden';
    })
})

modalClose.addEventListener('click', ()=>{
    modal.classList.add('hide');
    modal.classList.remove('show');
    container.classList.add('hide');
    container.classList.remove('show');
    document.body.style.overflow='';

})
// module.exports = {
//     // testf: function () {console.log("bingo!!!!!");}
//     openModalMenu: function () {
//         document.getElementById("modalMenu").style.top = "0px";
//     },
    
//     closeModalMenu: function () {
//         document.getElementById("modalMenu").style.top = "-400px";
//     },
    
//     openModal: function () {
//         console.log("ha-ha-ha");
//         document.getElementById("modal").style.top = "0px";
//     },
    
//     closeModal: function () {
//         document.getElementById("modal").style.top = "-400px";
//     },
    
// };




