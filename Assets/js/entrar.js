let botaoMenu = document.querySelector('span#burguer')


botaoMenu.addEventListener('click', clicar)
function clicar(){

    let lista = document.querySelector('#janelaMenuId')
    if (lista.style.display == 'none'){
        lista.style.display = 'block'
        botaoMenu.classList.add('completarMenu');
    } else {
        lista.style.display = 'none'
        botaoMenu.classList.remove('completarMenu');
    }
}