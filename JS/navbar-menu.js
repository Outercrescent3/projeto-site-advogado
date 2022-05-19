var menuBar = document.querySelector('.menu-mobile i')
menuBar.addEventListener('click',clicado)
function clicado(){
    let menuMobile = document.querySelector('.menu-mobile ul')
    menuMobile.classList.add('show-menu')
}