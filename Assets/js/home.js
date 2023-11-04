const burguer = document.querySelector('span#burguer')
burguer.addEventListener('click', clicar)

function clicar(){
    let menu = document.querySelector('menu#lista')
    if (menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}
