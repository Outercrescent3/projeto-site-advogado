var menuBar = document.querySelector('.menu-mobile i')
menuBar.addEventListener('click',clicado)
function clicado(){
    let menuMobile = document.querySelector('.menu-mobile ul')
    
    //a condição abaixo faz com que seja criado a opção de remover o menu.

    if(menuMobile.classList.contains(`show-menu`)){

        menuMobile.classList.remove(`show-menu`)

    }else{
        menuMobile.classList.add('show-menu')
    }
}